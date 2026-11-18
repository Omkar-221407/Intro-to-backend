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

## ⚡ Quick Start Guide (For Beginners)

### 1. Prerequisites
Make sure you have installed on your laptop:
* [Node.js (LTS version)](https://nodejs.org/)
* [Git](https://git-scm.com/)
* [Postman Desktop App](https://www.postman.com/downloads/)
* A free [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)

---

### 2. Install Dependencies
Open your terminal inside this project folder and run:
```bash
npm install
```

---

### 3. Setup MongoDB Atlas (Online Free Database)

1. **Sign up or log in** to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. **Create a Cluster:**
   * Select the **FREE (M0)** tier.
   * Choose your preferred cloud provider and closest region (e.g., AWS / Mumbai or Singapore).
   * Click **Create Deployment**.
3. **Create Database User:**
   * In the Security / Database Access tab, click **Add New Database User**.
   * Choose **Password Authentication**.
   * Set a Username (e.g. `myUser`) and a Password (e.g. `Secret123`).
   * Grant **Read and write to any database** permissions and click **Add User**.
4. **Network Access (IP Whitelist):**
   * Go to **Network Access** tab on the left sidebar.
   * Click **Add IP Address**.
   * Click **Allow Access from Anywhere** (`0.0.0.0/0`) so your laptop can connect.
   * Click **Confirm**.
5. **Get Your Connection String:**
   * Go to **Database** (Clusters) on the left sidebar.
   * Click the **Connect** button next to your cluster.
   * Choose **Drivers** (Node.js).
   * Copy the connection string. It looks like:
     ```text
     mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```
6. **Configure `.env` File:**
   * Open the `.env` file in the root of this project.
   * Replace `<username>` and `<password>` with your actual database credentials and specify a database name:
     ```env
     PORT=5000
     NODE_ENV=development
     MONGO_URI=mongodb+srv://myUser:Secret123@cluster0.xxxxx.mongodb.net/backendTutorial?retryWrites=true&w=majority
     ```

---

### 4. Run the Server

* **Development mode (Auto-restarts when code changes):**
  ```bash
  npm run dev
  ```
* **Production mode:**
  ```bash
  npm start
  ```

When successful, your terminal will display:
```text
====================================================
🚀 Server listening on: http://localhost:5000
📡 Environment: development
====================================================
✅ MongoDB Connected Successfully: cluster0-shard-00-00.xxxxx.mongodb.net
📦 Database Name: backendTutorial
```

---

## 📡 API Endpoints Reference

### 🌐 General
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API welcome banner and endpoint index |
| `GET` | `/api/health` | Server uptime and health status |

### 👤 User APIs (Auth & CRUD)
| Method | Endpoint | Description | Sample Request Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/users/register` | Register new user (hashing password) | `{"name":"Alice","email":"alice@example.com","password":"secret123","age":22}` |
| `POST` | `/api/users/login` | Login user (verifying password) | `{"email":"alice@example.com","password":"secret123"}` |
| `GET` | `/api/users` | Read all users (passwords omitted) | *None* |
| `GET` | `/api/users/:id` | Read single user by MongoDB `_id` | *None* |
| `PUT` | `/api/users/:id` | Update user by `_id` | `{"name":"Alice Updated","age":23}` |
| `DELETE` | `/api/users/:id` | Delete user by `_id` | *None* |

### 📦 Item APIs (Resource CRUD)
| Method | Endpoint | Description | Sample Request Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/items` | Create a new item | `{"title":"Mechanical Keyboard","price":89.99,"category":"Electronics"}` |
| `GET` | `/api/items` | Get all items | *None* |
| `GET` | `/api/items/:id` | Get item by MongoDB `_id` | *None* |
| `PUT` | `/api/items/:id` | Update item by `_id` | `{"price":79.99,"inStock":true}` |
| `DELETE` | `/api/items/:id` | Delete item by `_id` | *None* |

---

## 📮 How to Test with Postman

1. Open the **Postman desktop app**.
2. Click the **Import** button in the top-left corner.
3. Select the file [`postman_collection.json`](./postman_collection.json) located in this project.
4. You will see a collection titled **Backend Tutorial - Node.js Express MongoDB** with all pre-configured requests!
5. **Testing sequence:**
   1. Run `GET Root Welcome & Directory` (`http://localhost:5000/`).
   2. Run `POST 1. Register User` to create your first user.
   3. Copy the returned `_id` from the response.
   4. Paste that ID into the collection variable `userId` (or directly in the URL: `/api/users/<copied-id>`).
   5. Test `POST 2. Login User`, `GET 3. Get All Users`, `PUT 5. Update User`, and `DELETE 6. Delete User`.
   6. Check your MongoDB Atlas web dashboard under **Browse Collections** to watch documents being created in real time!

---

## 🐙 How to Push to a New GitHub Repository

Follow these exact steps in your terminal to submit your project:

1. **Initialize Git & Make Initial Commit (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: complete backend tutorial implementation"
   ```

2. **Create a New Public Repository on GitHub:**
   * Go to [github.com/new](https://github.com/new).
   * Set **Repository name** (e.g. `intro-to-backend-assignment`).
   * Ensure it is set to **Public**.
   * Leave "Initialize with README", ".gitignore", and "License" **UNCHECKED** (we already have them!).
   * Click **Create repository**.

3. **Link Your Local Code and Push:**
   * Copy your repo URL from GitHub (e.g. `https://github.com/<your-username>/intro-to-backend-assignment.git`).
   * Run the following commands:
     ```bash
     git branch -M main
     git remote add origin https://github.com/<your-username>/<your-repo-name>.git
     git push -u origin main
     ```

4. **Verify:** Refresh your GitHub repository page in your browser. All your source files will now be visible, and your `.env` (with passwords) will safely remain hidden!

---

## 🎓 3rd Evaluation Preparation / Viva Q&A

Here are the key questions instructors typically ask during backend evaluations:

* **Q1: What is the Model-Route-Controller (MRC/MVC) pattern?**
  * *Answer:* It separates concerns:
    * **Model:** Defines the data structure, rules, and database schema using Mongoose.
    * **Route:** Maps HTTP verbs (`GET`, `POST`, etc.) and URLs to the right controller function.
    * **Controller:** Contains the core business logic (database queries, validation, response generation).

* **Q2: Why use `bcryptjs` instead of storing plain text passwords?**
  * *Answer:* If a database is ever compromised, plain text passwords expose user credentials. `bcryptjs` uses a one-way mathematical hashing algorithm combined with a cryptographic salt (`bcrypt.genSalt(10)`), making it impossible to reverse-engineer the original password.

* **Q3: What is Express middleware?**
  * *Answer:* Middleware functions run between receiving an incoming HTTP request and sending the HTTP response. Examples in this project include `cors()`, `express.json()` (which parses JSON bodies), and our request logger.

* **Q4: What is the difference between PUT and PATCH?**
  * *Answer:* `PUT` traditionally replaces or updates an entire resource document, whereas `PATCH` applies partial modifications to selected fields.

* **Q5: Why do we use `.env` files?**
  * *Answer:* To keep sensitive credentials (database passwords, API keys, port numbers) outside the codebase. This prevents secrets from being accidentally uploaded to public version control (GitHub).
