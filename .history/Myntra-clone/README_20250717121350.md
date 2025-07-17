# Myntra Clone (Frontend)

A responsive Myntra e-commerce clone built using **React**, **React Router**, and **Redux Toolkit** with basic **frontend authentication** using localStorage.

## 🔥 Features

- Fully responsive UI (Myntra-like)
- User authentication (login/register) with state management via Redux Toolkit
- Persistent authentication using localStorage
- Protected routes with React Router
- Dynamic navigation based on login status
- Logout functionality
- Basic product categories display

## 🛠️ Tech Stack

- React
- React Router DOM
- Redux Toolkit
- Bootstrap (for styling)
- localStorage (for auth persistence)

## 📦 Installation

```bash
git clone https://github.com/yourusername/myntra-clone.git
cd myntra-clone
npm install
npm start
```
💡 Functional Overview
Login / Register:

New users must register first (stored in localStorage).

Registered users can login with their credentials.

Once logged in, the user is redirected to the Home page.

Session Persistence:

If the user is already logged in (based on localStorage), authentication persists across page reloads.

Logout:

Clicking logout clears the Redux state and localStorage, then redirects to the login page.

Navigation:

Header dynamically shows login/register or logout based on authentication status.

🎯 Future Improvements
Backend API integration for real authentication

Product search and filtering

Cart & wishlist functionalities

Payment gateway integration
📄 License
This project is for educational purposes only.

---

Let me know if you'd like to customize any specific sections (e.g., add deployment steps).
