// Backend / controllers / foodController.js
import foodModel from "../models/foodModel.js";
import fs from "fs";

/* ---------------- ADD FOOD ITEM [ID] ---------------- */
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  const savedFood = await food.save();

  try {
    await food.save();
    res.json({
      success: true,
      message: "Food Added Successfully",
      food: savedFood,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding food" });
  }
};

/* ---------------- ALL FOOD LIST ---------------- */
const listFood = async (req, res) => {
  try {
    const food = await foodModel.find({});
    res.json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching food items" });
  }
};

/* ---------------- REMOVE FOOD ITEM [ID] ---------------- */
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) return res.json({ success: false, message: "Food not found" });

    // Only delete if file exists
    const filePath = `uploads/${food.image}`;
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Food Deleted Successfully",
      food: {
        id: food._id,
        name: food.name,
        price: food.price,
        description: food.description,
        category: food.category,
        image: food.image,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error deleting food item" });
  }
};

export { addFood, listFood, removeFood };
