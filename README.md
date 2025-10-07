# 🍔 ZestyGo – Full Stack Food Ordering Website (MERN Stack)

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0.0-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0.6-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey?logo=express)](https://expressjs.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payment-blueviolet?logo=stripe)](https://stripe.com/)

**ZestyGo** is a complete **Full Stack Food Ordering Website** built using the **MERN Stack (MongoDB, Express, React, Node.js)**.  
The application allows users to browse food items, add them to the cart, and place orders with secure online payments using **Stripe**.  
It includes **Frontend**, **Backend**, and an **Admin Panel** for managing food items, users, and orders.

---

## ✨ Features

### 🧍 User (Customer) Portal

- Register and log in securely
- Browse available food items
- Add/remove items in the cart
- Place food orders with Stripe online payment
- View and track order status
- Manage profile and order history

### 👨‍🍳 Admin Panel

- Manage food items (Add, Edit, Delete)
- View all customer orders
- Update order status (Pending → Delivered)
- Dashboard analytics for sales and orders

> ⚠️ Note: Delivery tracking is not real-time; order updates are managed by the admin.

---

## 🛠️ Technologies Used

### Frontend

- React.js (Vite)
- HTML, CSS, JavaScript
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- Stripe Payment Gateway
- JSON Web Token (JWT) Authentication

### Database

- MongoDB Atlas (Cloud Database)

---

## 📁 Folder Structure

```

Frontend-ZestyGo/
Backend-ZestyGo/
Admin-ZestyGo/

```

Each folder represents an independent app with its own dependencies.

---

## 🖼️ Screenshots

### 🏠 User Interface

![User Homepage](Frontend-ZestyGo/Screenshots/User_HomePage.png)

### 🛒 Cart Page

![Cart Page](Frontend-ZestyGo/Screenshots/User_Cart.png)

### 💳 Checkout Page

![Checkout Page](Frontend-ZestyGo/Screenshots/Checkout.png)

### 🧾 Admin Dashboard

![Admin Dashboard](Admin-ZestyGo/Screenshots/Admin_Dashboard.png)

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PrethigahShanmugarajah/ZestyGo.git
cd ZestyGo
```

### 2️⃣ Backend Setup

```bash
cd Backend-ZestyGo
npm install
npm run server
```

### 3️⃣ Frontend Setup

```bash
cd Frontend-ZestyGo
npm install
npm run dev
```

### 4️⃣ Admin Panel Setup

```bash
cd Admin-ZestyGo
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside your **Backend-ZestyGo/** directory and add the following:

```
PORT=your_port_number
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=your_frontend_url
```

---

## 🧠 References

This project is based on the tutorial by **GreatStack** on YouTube:
🎥 [Build Full Stack Food Ordering Website using React JS, MongoDB, Express, Node JS & Stripe | Full Stack Project 2024](https://youtu.be/DBMPXJJfQEA?si=dLiZ05mEJ1Z1sm7d)

---

## Project Link

[GitHub Repository](https://github.com/PrethigahShanmugarajah/ZestyGo.git)

---

## Author

**Prethigah Shanmugarajah**
Department of Software Engineering, Faculty of Computing (2020/2021)
Sabaragamuwa University of Sri Lanka
