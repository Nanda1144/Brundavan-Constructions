# 🏗️ Brundhavan Constructions Website

A modern, fully responsive, and visually premium static website developed for a construction company. This project showcases services, founder details, and allows users to contact directly via email — all with a smooth, animated user experience.

---

## 🚀 Features

- ✨ Elegant and premium UI/UX design
- 🎯 Auto popup for "Philosophy & Vision"
- 🏗️ Services section with animated scroll effects
- 👷 Founder profile with highlighted achievements
- 📊 Dynamic stats (experience, projects, specialization)
- 📸 On-site work gallery
- 📩 Contact form with email functionality (EmailJS)
- 📱 Fully responsive (mobile + desktop)
- ⚡ Smooth animations and transitions

---

## 🖼️ Tech Stack

- **Frontend:** React.js / HTML / CSS / JavaScript
- **Styling:** Tailwind CSS
- **Animations:** CSS / Framer Motion (optional)
- **Email Service:** EmailJS (no backend required)

---

## 📂 Project Structure
project-root/
│
├── public/
│ └── images/
│ ├── service1.jpg
│ ├── service2.jpg
│ ├── founder.jpg
│ ├── site1.jpg
│ └── ...
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── data/
│ └── App.js
│
├── package.json
└── README.md

---

## 🔧 Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/brundhavan-Constructions.git
Navigate to project folder:
cd brundhavan-Constructions
Install dependencies:
npm install
Start development server:
npm start
📩 Email Integration (Important)

This project uses EmailJS to send messages directly from the frontend.

Setup Steps:
Create account on https://www.emailjs.com/
Create:
Email Service
Email Template
Add your credentials in code:
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
  user_name: name,
  user_email: email,
  user_phone: phone,
  message: message
}, "YOUR_PUBLIC_KEY")
🖼️ Images
All images are stored locally in /public/images
Replace placeholder images with actual project images
🎯 Key Highlights
Designed with a premium corporate feel
Focus on user experience and smooth animations
Built as a fully static site (no backend required)
Optimized for performance and responsiveness
🌐 Deployment

You can deploy easily using:

Vercel
Netlify
GitHub Pages
📌 Future Enhancements
Admin panel for content management
Blog section
SEO optimization
Performance optimization
👨‍💻 Author

Developed by Nanda Kishore, Manil Kumar.
