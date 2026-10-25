# E-Commerce Backend API 🚀

A robust, secure, and scalable RESTful API built for a custom MERN e-commerce platform. It features user authentication, role-based access control, product management, and a database-backed, user-scoped shopping cart system.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js[cite: 1]
* **Framework:** Express.js[cite: 1]
* **Database:** MongoDB & Mongoose[cite: 1]
* **Authentication:** JSON Web Tokens (JWT) & bcryptjs[cite: 1]

---

## 📂 Project Architecture

```text
BackEnd/
├── src/
│   ├── config/         # Database configuration (db.js)[cite: 1]
│   ├── controllers/    # Route controllers (auth, product, cart logic)[cite: 1]
│   ├── middleware/     # Custom auth & role middleware[cite: 1]
│   ├── models/         # Mongoose schemas (User, Product, Cart)[cite: 1]
│   ├── routes/         # API endpoints routing[cite: 1]
│   ├── app.js          # Express app configuration & middleware[cite: 1]
│   └── server.js       # Server entry point[cite: 1]
├── .env                # Environment variables (git-ignored)[cite: 1]
├── .gitignore          # Git exclusion rules[cite: 1]
├── package.json        # Project dependencies and scripts[cite: 1]
└── package-lock.json   # Locked dependency versions[cite: 1]

```

---

## 🔌 API Endpoints

### **1. Authentication (`/api/auth`)**

* `POST /api/auth/register` - Register a new user
* `POST /api/auth/login` - Authenticate user & return JWT token
* `GET /api/auth/me` - Get current authenticated user profile *(Protected)*



### **2. Products (`/api/products`)**

* `GET /api/products` - Get all products


* `GET /api/products/:id` - Get product by ID


* `GET /api/products/categories` - Get all product categories


* `POST /api/products` - Create a new product *(Admin Only)*


* `PUT /api/products/:id` - Update a product *(Admin Only)*


* `DELETE /api/products/:id` - Delete a product *(Admin Only)*



### **3. Shopping Cart (`/api/cart`)** *(Protected)*

* `GET /api/cart` - Fetch the authenticated user's persistent cart from MongoDB
* `PUT /api/cart` - Sync/Update items in the user's cart
* `DELETE /api/cart` - Clear all items from the user's cart

---

## ⚙️ Getting Started Locally

### **Prerequisites**

* Node.js installed on your machine
* MongoDB Atlas account or local MongoDB instance

### **1. Clone the repository**

```bash
git clone <your-repository-url>
cd BackEnd

```

### **2. Install dependencies**

```bash
npm install

```

### **3. Configure Environment Variables**

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_secure_jwt_secret_key_here

```

### **4. Run the Application**

* For development (with hot reload via Nodemon):
```bash
npm run dev

```


* For production/start:
```bash
npm start

```



---

## ☁️ Deployment

This backend is optimized for deployment on **Render**:

1. Create a new **Web Service** on Render.


2. Connect your backend GitHub repository.


3. Set the **Build Command** to `npm install`.


4. Set the **Start Command** to `npm start`.


5. Add your production environment variables (`MONGO_URI`, `JWT_SECRET`, `PORT`) in the Render dashboard settings.

```
