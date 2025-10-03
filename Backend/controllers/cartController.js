// Backend / controllers / cartController.js
import userModel from "../models/userModel.js";
import foodModel from "../models/foodModel.js";

/* ---------------- Add Food Item to User Cart ---------------- */
export const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Fetch user
    const userData = await userModel.findById(req.body.userId);
    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Initialize cart if empty
    let cartData = userData.cartData || {};

    // Determine if the item is new or existing
    const isNewItem = !cartData[itemId];

    // Update quantity
    if (isNewItem) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    /* ---------------- Debug log ---------------- */
    console.log("Before update:", cartData);
    /* ---------------- Debug log ---------------- */

    // Save updated cart
    await userModel.findByIdAndUpdate(userId, { cartData });

    // Fetch all items in cart for full details
    const cartItemIds = Object.keys(cartData);
    const cartItemsDetails = await foodModel.find({
      _id: { $in: cartItemIds },
    });

    // Map full cart details
    const cartItems = cartItemsDetails
      .map((item) => ({
        _id: item._id,
        name: item.name,
        price: item.price,
        description: item.description,
        image: item.image,
        category: item.category,
        quantity: cartData[item._id],
        totalAmount: item.price * cartData[item._id],
        newlyAdded: item._id.toString() === itemId,
      }))
      .sort((a, b) => b.newlyAdded - a.newlyAdded);

    res.json({
      success: true,
      message: "Item added to cart",
      cartItems,
      cartData: cartData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error adding to cart",
      error: error.message,
    });
  }
};

/* ---------------- Remove Food Item from User Cart ---------------- */
export const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    // Fetch user
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    let cartData = userData.cartData || {};

    // Debug: show cart before removing
    console.log("Cart before remove:", cartData);

    // Determine the quantity to remove (1)
    const removedQuantity = cartData[itemId] > 0 ? 1 : 0;

    // Decrement or remove item if quantity reaches 0
    if (removedQuantity) {
      cartData[itemId] -= removedQuantity;
      if (cartData[itemId] <= 0) {
        delete cartData[itemId];
      }
    }

    // Save updated cart
    await userModel.findByIdAndUpdate(userId, { cartData });

    // Fetch remaining cart items details
    const cartItemIds = Object.keys(cartData);
    const cartItemsDetails = await foodModel.find({
      _id: { $in: cartItemIds },
    });

    const cartItems = cartItemsDetails.map((item) => ({
      _id: item._id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
      quantity: cartData[item._id],
      totalAmount: item.price * cartData[item._id],
    }));

    // Get removed item details only if something was removed
    let removedItem = null;
    if (removedQuantity) {
      const removedItemDetails = await foodModel.findById(itemId);
      if (removedItemDetails) {
        removedItem = {
          _id: removedItemDetails._id,
          name: removedItemDetails.name,
          price: removedItemDetails.price,
          description: removedItemDetails.description,
          image: removedItemDetails.image,
          category: removedItemDetails.category,
          quantity: removedQuantity,
          totalAmount: removedItemDetails.price * removedQuantity,
        };
      }
    }

    res.json({
      success: true,
      message: "Removed from Cart",
      removedItem,
      cartItems,
      cart: cartData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error removing from cart",
      error: error.message,
    });
  }
};

/* ---------------- Fetch User Cart Data ---------------- */
export const getCart = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    // Filter out items with quantity 0 or less
    const cartItemIds = Object.keys(cartData).filter((id) => cartData[id] > 0);

    // If no items in cart, return empty cart response
    if (cartItemIds.length === 0) {
      // Clean up the cart data by removing all zero quantity items
      await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

      return res.json({
        success: true,
        message: "Cart is empty",
        cartItems: [],
        cartData: {},
        isEmpty: true,
      });
    }

    // Fetch all items in cart for full details (only existing items in DB)
    const cartItemsDetails = await foodModel.find({
      _id: { $in: cartItemIds },
    });

    // Get IDs of items that actually exist in the database
    const existingItemIds = cartItemsDetails.map((item) => item._id.toString());

    // Clean cart data - remove deleted items and zero quantities
    const cleanCartData = {};
    cartItemsDetails.forEach((item) => {
      const itemId = item._id.toString();
      if (cartData[itemId] > 0) {
        cleanCartData[itemId] = cartData[itemId];
      }
    });

    // Update user's cart data if it was cleaned
    if (Object.keys(cleanCartData).length !== Object.keys(cartData).length) {
      await userModel.findByIdAndUpdate(req.body.userId, {
        cartData: cleanCartData,
      });
      console.log("Cart cleaned up - removed deleted items");
    }

    // Map full cart details
    const cartItems = cartItemsDetails.map((item) => ({
      _id: item._id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
      quantity: cleanCartData[item._id],
      totalAmount: item.price * cleanCartData[item._id],
    }));

    res.json({
      success: true,
      message: "Fetched cart data",
      cartItems,
      cartData: cleanCartData,
      isEmpty: false,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error fetching cart data",
      error: error.message,
    });
  }
};
