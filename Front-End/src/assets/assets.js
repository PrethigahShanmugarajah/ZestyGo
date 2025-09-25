// import basket_icon from "./basket_icon.png";
import Logo from "./Logo.png";
import Header_Image from "./Header_Image.png";
// import search_icon from "./search_icon.png";
import Menu_1 from "./Menu_1.png";
import Menu_2 from "./Menu_2.png";
import Menu_3 from "./Menu_3.png";
import Menu_4 from "./Menu_4.png";
import Menu_5 from "./Menu_5.png";
// import Menu_6 from "./Menu_6.png";
// import Menu_7 from "./Menu_7.png";
// import Menu_8 from "./Menu_8.png";
// import Menu_9 from "./Menu_9.png";
// import Menu_10 from "./Menu_10.png";

import Menu_1_1 from "./Menu_1_1.png";
import Menu_1_2 from "./Menu_1_2.png";
import Menu_1_3 from "./Menu_1_3.png";
import Menu_1_4 from "./Menu_1_4.png";
import Menu_2_1 from "./Menu_2_1.png";
import Menu_2_2 from "./Menu_2_2.png";
import Menu_2_3 from "./Menu_2_3.png";
import Menu_2_4 from "./Menu_2_4.png";
import Menu_3_1 from "./Menu_3_1.png";
import Menu_3_2 from "./Menu_3_2.png";
import Menu_3_3 from "./Menu_3_3.png";
import Menu_3_4 from "./Menu_3_4.png";
import Menu_4_1 from "./Menu_4_1.png";
import Menu_4_2 from "./Menu_4_2.png";
import Menu_4_3 from "./Menu_4_3.png";
import Menu_4_4 from "./Menu_4_4.png";
import Menu_5_1 from "./Menu_5_1.png";
import Menu_5_2 from "./Menu_5_2.png";
import Menu_5_3 from "./Menu_5_3.png";
import Menu_5_4 from "./Menu_5_4.png";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";

export const assets = {
  Logo,
  // basket_icon,
  Header_Image,
  // search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
};

export const menu_list = [
  {
    menu_name: "Rice & Curry",
    menu_image: Menu_1,
  },
  {
    menu_name: "Kottu Roti",
    menu_image: Menu_2,
  },
  {
    menu_name: "Hoppers (Appam)",
    menu_image: Menu_3,
  },
  {
    menu_name: "String Hoppers",
    menu_image: Menu_4,
  },
  {
    menu_name: "Fried Rice",
    menu_image: Menu_5,
  },
  // {
  //   menu_name: "Devilled Dishes",
  //   menu_image: Menu_6,
  // },
  // {
  //   menu_name: "Seafood Specials",
  //   menu_image: Menu_7,
  // },
  // {
  //   menu_name: "Parotta & Curry",
  //   menu_image: Menu_8,
  // },
  // {
  //   menu_name: "Biriyani",
  //   menu_image: Menu_9,
  // },
  // {
  //   menu_name: "Short Eats",
  //   menu_image: Menu_10,
  // },
];

export const food_list = [
  // Rice & Curry
  {
    _id: "1",
    name: "Chicken Rice & Curry",
    image: Menu_1_1,
    price: 550,
    description:
      "Steamed rice with spicy chicken curry, dhal, and fresh veggies.",
    category: "Rice & Curry",
  },
  {
    _id: "2",
    name: "Fish Rice & Curry",
    image: Menu_1_2,
    price: 600,
    description: "Traditional rice served with tangy fish curry and sambol.",
    category: "Rice & Curry",
  },
  {
    _id: "3",
    name: "Vegetable Rice & Curry",
    image: Menu_1_3,
    price: 450,
    description:
      "Healthy rice with brinjal moju, dhal curry, and mixed vegetables.",
    category: "Rice & Curry",
  },
  {
    _id: "4",
    name: "Egg Rice & Curry",
    image: Menu_1_4,
    price: 500,
    description: "Classic boiled egg curry paired with rice and side dishes.",
    category: "Rice & Curry",
  },

  // Kottu Roti
  {
    _id: "5",
    name: "Chicken Kottu",
    image: Menu_2_1,
    price: 750,
    description:
      "Shredded godamba roti stir-fried with chicken, egg, and curry.",
    category: "Kottu Roti",
  },
  {
    _id: "6",
    name: "Cheese Kottu",
    image: Menu_2_2,
    price: 850,
    description: "Creamy cheese blended with spicy kottu roti and vegetables.",
    category: "Kottu Roti",
  },
  {
    _id: "7",
    name: "Egg Kottu",
    image: Menu_2_3,
    price: 650,
    description: "Soft godamba roti fried with scrambled egg and spices.",
    category: "Kottu Roti",
  },
  {
    _id: "8",
    name: "Seafood Kottu",
    image: Menu_2_4,
    price: 950,
    description: "Delicious mix of prawns and cuttlefish tossed in kottu roti.",
    category: "Kottu Roti",
  },

  // Hoppers (Appam)
  {
    _id: "9",
    name: "Plain Hopper",
    image: Menu_3_1,
    price: 50,
    description:
      "Crispy golden hopper made with fermented rice flour & coconut milk.",
    category: "Hoppers (Appam)",
  },
  {
    _id: "10",
    name: "Egg Hopper",
    image: Menu_3_2,
    price: 100,
    description:
      "Traditional hopper with a fried egg center, perfect with sambol.",
    category: "Hoppers (Appam)",
  },
  {
    _id: "11",
    name: "Milk Hopper",
    image: Menu_3_3,
    price: 120,
    description: "Sweet hopper filled with coconut milk mixture.",
    category: "Hoppers (Appam)",
  },
  {
    _id: "12",
    name: "Honey Hopper",
    image: Menu_3_4,
    price: 150,
    description: "Crispy hopper drizzled with kithul honey.",
    category: "Hoppers (Appam)",
  },

  // String Hoppers
  {
    _id: "13",
    name: "String Hoppers with Curry",
    image: Menu_4_1,
    price: 300,
    description: "Soft string hoppers served with dhal and potato curry.",
    category: "String Hoppers",
  },
  {
    _id: "14",
    name: "String Hoppers with Pol Sambol",
    image: Menu_4_2,
    price: 280,
    description: "Freshly steamed string hoppers with coconut sambol.",
    category: "String Hoppers",
  },
  {
    _id: "15",
    name: "String Hoppers with Chicken Curry",
    image: Menu_4_3,
    price: 400,
    description: "Traditional breakfast with spicy chicken curry.",
    category: "String Hoppers",
  },
  {
    _id: "16",
    name: "String Hoppers with Fish Curry",
    image: Menu_4_4,
    price: 420,
    description: "Soft string hoppers paired with a spicy fish curry.",
    category: "String Hoppers",
  },

  // Fried Rice
  {
    _id: "17",
    name: "Chicken Fried Rice",
    image: Menu_5_1,
    price: 650,
    description: "Sri Lankan style fried rice with chicken and vegetables.",
    category: "Fried Rice",
  },
  {
    _id: "18",
    name: "Egg Fried Rice",
    image: Menu_5_2,
    price: 550,
    description: "Fragrant fried rice with scrambled eggs and soy flavor.",
    category: "Fried Rice",
  },
  {
    _id: "19",
    name: "Seafood Fried Rice",
    image: Menu_5_3,
    price: 800,
    description: "Fried rice tossed with prawns, cuttlefish, and spices.",
    category: "Fried Rice",
  },
  {
    _id: "20",
    name: "Mixed Fried Rice",
    image: Menu_5_4,
    price: 850,
    description: "Loaded fried rice with chicken, prawns, and vegetables.",
    category: "Fried Rice",
  },

  // Devilled Dishes
  // {
  //   _id: "21",
  //   name: "Devilled Chicken",
  //   image: Menu_6_1,
  //   price: 750,
  //   description: "Spicy and tangy chicken stir-fried with capsicum and onions.",
  //   category: "Devilled Dishes",
  // },
  // {
  //   _id: "22",
  //   name: "Devilled Prawns",
  //   image: Menu_6_2,
  //   price: 950,
  //   description: "Juicy prawns cooked in spicy devilled sauce.",
  //   category: "Devilled Dishes",
  // },
  // {
  //   _id: "23",
  //   name: "Devilled Fish",
  //   image: Menu_6_3,
  //   price: 850,
  //   description: "Crispy fried fish tossed in devilled chili sauce.",
  //   category: "Devilled Dishes",
  // },
  // {
  //   _id: "24",
  //   name: "Devilled Pork",
  //   image: Menu_6_4,
  //   price: 900,
  //   description: "Sri Lankan pork stir-fried with fiery devilled seasoning.",
  //   category: "Devilled Dishes",
  // },

  // // Seafood Specials
  // {
  //   _id: "25",
  //   name: "Prawn Curry",
  //   image: Menu_7_1,
  //   price: 950,
  //   description: "Rich coconut-based curry with jumbo prawns.",
  //   category: "Seafood Specials",
  // },
  // {
  //   _id: "26",
  //   name: "Fish Ambul Thiyal",
  //   image: Menu_7_2,
  //   price: 900,
  //   description: "Traditional sour fish curry with goraka spice.",
  //   category: "Seafood Specials",
  // },
  // {
  //   _id: "27",
  //   name: "Crab Curry",
  //   image: Menu_7_3,
  //   price: 1200,
  //   description: "Sri Lankan style spicy crab curry with coconut milk.",
  //   category: "Seafood Specials",
  // },
  // {
  //   _id: "28",
  //   name: "Cuttlefish Curry",
  //   image: Menu_7_4,
  //   price: 950,
  //   description: "Tender cuttlefish cooked in a fiery coconut curry.",
  //   category: "Seafood Specials",
  // },

  // // Parotta & Curry
  // {
  //   _id: "29",
  //   name: "Parotta with Chicken Curry",
  //   image: Menu_8_1,
  //   price: 400,
  //   description: "Flaky parotta with spicy chicken curry.",
  //   category: "Parotta & Curry",
  // },
  // {
  //   _id: "30",
  //   name: "Parotta with Mutton Curry",
  //   image: Menu_8_2,
  //   price: 500,
  //   description: "Crispy parotta served with tender mutton curry.",
  //   category: "Parotta & Curry",
  // },
  // {
  //   _id: "31",
  //   name: "Parotta with Veg Curry",
  //   image: Menu_8_3,
  //   price: 350,
  //   description: "Delicious parotta with mixed vegetable curry.",
  //   category: "Parotta & Curry",
  // },
  // {
  //   _id: "32",
  //   name: "Parotta with Egg Curry",
  //   image: Menu_8_4,
  //   price: 380,
  //   description: "Soft parotta served with spicy egg curry.",
  //   category: "Parotta & Curry",
  // },

  // // Biriyani
  // {
  //   _id: "33",
  //   name: "Chicken Biriyani",
  //   image: Menu_9_1,
  //   price: 850,
  //   description: "Fragrant basmati rice cooked with chicken and spices.",
  //   category: "Biriyani",
  // },
  // {
  //   _id: "34",
  //   name: "Mutton Biriyani",
  //   image: Menu_9_2,
  //   price: 1000,
  //   description: "Rich mutton biriyani with caramelized onions and raita.",
  //   category: "Biriyani",
  // },
  // {
  //   _id: "35",
  //   name: "Egg Biriyani",
  //   image: Menu_9_3,
  //   price: 700,
  //   description: "Classic egg biriyani with aromatic spices.",
  //   category: "Biriyani",
  // },
  // {
  //   _id: "36",
  //   name: "Veg Biriyani",
  //   image: Menu_9_4,
  //   price: 650,
  //   description: "Colorful biriyani with mixed vegetables and herbs.",
  //   category: "Biriyani",
  // },

  // // Short Eats
  // {
  //   _id: "37",
  //   name: "Fish Bun",
  //   image: Menu_10_1,
  //   price: 120,
  //   description: "Soft bun stuffed with spicy fish filling.",
  //   category: "Short Eats",
  // },
  // {
  //   _id: "38",
  //   name: "Rolls (Fish/Egg/Veg)",
  //   image: Menu_10_2,
  //   price: 100,
  //   description: "Crispy rolls with delicious fillings of choice.",
  //   category: "Short Eats",
  // },
  // {
  //   _id: "39",
  //   name: "Cutlets",
  //   image: Menu_10_3,
  //   price: 80,
  //   description: "Deep fried cutlets filled with fish and potato mix.",
  //   category: "Short Eats",
  // },
  // {
  //   _id: "40",
  //   name: "Patties",
  //   image: Menu_10_4,
  //   price: 90,
  //   description: "Crispy fried pastry with spicy vegetable filling.",
  //   category: "Short Eats",
  // },
];
