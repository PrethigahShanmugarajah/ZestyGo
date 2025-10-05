// Backend / controllers / orderController.js
import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/* ---------------- PLACING USER ORDER FOR FRONTEND ---------------- */
export const placeOrder = async (req, res) => {
  const frontend_url = process.env.FRONTEND_URL;
  console.log("Order request body:", req.body);

  try {
    const { userId, items, amount, address } = req.body;
    if (!userId || !items || !address) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid order data" });
    }

    const newOrder = new orderModel({ userId, items, amount, address });
    await newOrder.save();
    console.log("Order saved:", newOrder._id);

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    console.log("User cart cleared");

    const user = await userModel
      .findById(userId)
      .select("firstName lastName email");

    const line_items = items.map((item) => ({
      price_data: {
        currency: "lkr",
        product_data: { name: item.name },
        unit_amount: Math.round(Number(item.price) * 100),
      },
      quantity: item.quantity,
    }));

    const itemsTotal = items.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0
    );
    const deliveryFee = Math.round(itemsTotal * 0.05);

    line_items.push({
      price_data: {
        currency: "lkr",
        product_data: { name: "Delivery Charges (5%)" },
        unit_amount: deliveryFee * 100,
      },
      quantity: 1,
    });

    console.log("Creating Stripe session...");
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });
    console.log("✅ Stripe session created:", session.url);

    const itemsWithTotal = items.map((item) => ({
      ...item,
      total: Number(item.price) * item.quantity,
    }));

    res.json({
      success: true,
      session_url: session.url,
      order: {
        orderId: newOrder._id,
        userId,
        firstName: address.firstName,
        lastName: address.lastName,
        email: user?.email || address.email,
        address,
        phone: address.phone,
        items: itemsWithTotal,
        total: itemsTotal,
        "deliveryFee(5%)": deliveryFee,
        amount: itemsTotal + deliveryFee,
      },
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({
      success: false,
      message: "Error placing order",
      error: error.message,
    });
  }
};

/* ---------------- VERIFY ORDER ---------------- */
export const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    if (success === "true") {
      order.payment = true;
      await order.save();

      res.json({
        success: true,
        message: "Payment verified successfully",
        order: {
          orderId: order._id,
          userId: order.userId,
          address: order.address,
          items: order.items,
          total: order.amount - Math.round(order.amount * 0.05),
          "deliveryFee(5%)": Math.round(order.amount * 0.05),
          amount: order.amount,
          payment: order.payment,
        },
      });
    } else {
      await orderModel.findByIdAndDelete(orderId);

      res.status(400).json({
        success: false,
        message: `Payment failed. Order ${orderId} has been cancelled.`,
        orderId: orderId,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error verifying order",
      error: error.message,
    });
  }
};

/* ---------------- USER ORDERS FOR FRONTEND ---------------- */
export const userOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching orders",
      error: error.message,
    });
  }
};
