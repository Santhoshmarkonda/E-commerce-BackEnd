# E-Commerce Backend API 🚀

A robust, secure, and scalable RESTful API built for a custom MERN e-commerce platform. It features user authentication, role-based access control, product management, and a database-backed, user-scoped shopping cart system.

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB & Mongoose
* **Authentication:** JSON Web Tokens (JWT) & bcryptjs

---

## 📂 Project Architecture

```text
BackEnd/
├── src/
│   ├── config/         # Database configuration (db.js)
│   ├── controllers/    # Route controllers (auth, product, cart logic)
│   ├── middleware/     # Custom auth & role middleware
│   ├── models/         # Mongoose schemas (User, Product, Cart)
│   ├── routes/         # API endpoints routing
│   ├── app.js          # Express app configuration & middleware
│   └── server.js       # Server entry point
├── .env                # Environment variables (git-ignored)[cite: 1]
├── .gitignore          # Git exclusion rules[cite: 1]
├── package.json        # Project dependencies and scripts[cite: 1]
└── package-lock.json   # Locked dependency versions[cite: 1]
