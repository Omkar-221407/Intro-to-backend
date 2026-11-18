# 🚀 Intro to Backend Web Development (Node.js, Express, MongoDB)

A beginner-friendly REST API backend application built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**, following the **MRC (Model-Route-Controller)** architectural pattern.

This project covers:
1. Setting up a Node.js project with ES Modules and Git.
2. Connecting securely to a cloud database hosted on **MongoDB Atlas**.
3. Defining Mongoose data schemas and models (`User` and `Item`).
4. Building practical Express APIs with full **CRUD** (Create, Read, Update, Delete) capabilities.
5. User registration & authentication with **password hashing** using `bcryptjs`.
6. Testing all endpoints seamlessly using the **Postman desktop app**.

---

## 📁 Project Structure

```text
backend-tutorial/
├── src/
│   ├── config/
│   │   └── db.js                 # MongoDB connection logic
│   ├── controllers/
│   │   ├── item.controller.js    # Resource CRUD business logic
│   │   └── user.controller.js    # User Auth & CRUD business logic
│   ├── models/
│   │   ├── item.model.js         # Mongoose schema for Items
│   │   └── user.model.js         # Mongoose schema for Users
│   ├── routes/
│   │   ├── item.routes.js        # Item API endpoint routes
│   │   └── user.routes.js        # User API endpoint routes
│   └── server.js                 # Main Express server entry point
├── .env.example                  # Environment variable template
├── .gitignore                    # Excludes node_modules and .env from Git
├── package.json                  # Dependencies & scripts
├── postman_collection.json       # Ready-to-import Postman collection
└── README.md                     # Documentation & setup guide
```

---

## 🛠️ Tech Stack & Dependencies

* **Runtime:** Node.js
* **Framework:** Express.js (v4)
* **Database:** MongoDB Atlas (Cloud NoSQL)
* **ODM (Object Data Modeling):** Mongoose (v8)
* **Security & Auth:** `bcryptjs` (secure password hashing)
* **Utilities:** `dotenv` (environment variables), `cors` (cross-origin resource sharing)
* **Developer Tool:** `nodemon` (auto-reloading dev server)

---

