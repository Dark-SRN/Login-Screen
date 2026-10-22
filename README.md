# Secure Login Screen

A lightweight web application built with **Vanilla JavaScript**, **HTML/CSS**, and a **Supabase** backend using direct REST `fetch()` requests and PostgreSQL RPC functions.

## Features
* **User Authentication:** Securely verifies user credentials using server-side PostgreSQL functions (RPC) to protect plain-text data.
* **User Registration:** Allows new users to sign up and save their credentials to the database.
* **Responsive Frontend:** Clean, modern UI connected seamlessly via modern JavaScript `async/await` and Fetch API.
* **Light/Dark Mode Support:** Supports Light/Dark Mode and preference saving via localStorage
* **Vercel Ready:** Optimized for instant deployment on Vercel.

---

## Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Backend / Database:** Supabase (PostgreSQL, REST API, RPC Functions)
* **Hosting / Deployment:** Vercel

---

## Project Structure
```text
├── index.html        # Main entry point (Login/Signup UI)
├── login.html        # Dashboard or post-login page
├── app.js            # Frontend logic & Supabase fetch requests
├── style.css         # Style for registe/login pages
├── login.js          # Logic for post-login page
├── login.css         # Style and Modes for post-login page
├── register.html     # Register point
├── register.js       # Supabase Requests For Registering
└── README.md         # Project documentation
```

---

## Credits
- Me
- Gemini AI(For Backend Supabase Purposes)
