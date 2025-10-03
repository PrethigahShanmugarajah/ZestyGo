// Front-End / src / context / StoreContext.jsx
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const url = import.meta.env.VITE_BACKEND_URL;

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    if (token) {
      try {
        const response = await axios.post(
          url + "/api/cart/add",
          { itemId },
          { headers: { token } }
        );

        if (response.data.success) {
          console.log("Backend cart data:", response.data.cartData);
          setCartItems(response.data.cartData);
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    } else {
      if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      }
    }
  };

  const removeFromCart = async (itemId) => {
    if (token) {
      try {
        const response = await axios.post(
          url + "/api/cart/remove",
          { itemId },
          { headers: { token } }
        );

        if (response.data.success) {
          console.log("Backend cart after remove:", response.data.cart);
          setCartItems(response.data.cart);
        }
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 0,
      }));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getDeliveryFee = () => {
    const subtotal = getTotalCartAmount();
    return subtotal === 0 ? 0 : Math.round(subtotal * 0.05 * 100) / 100;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        url + "/api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        if (response.data.isEmpty) {
          console.log("Cart is empty - no items to load");
          setCartItems({});
        } else {
          console.log(
            "Cart loaded with items:",
            response.data.cartItems.length
          );
          setCartItems(response.data.cartData || {});
        }
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
      setCartItems({});
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(localStorage.getItem("token"));
      } else {
        setCartItems({});
        console.log("No token found - cart cleared");
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getDeliveryFee,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
