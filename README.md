# 🎓 B.Tech 1st Year Personal Portfolio Website

> **Academic Submission:** Portfolio Project for 1st Year Engineering Coursework  
> **Student Persona:** Divyansh Bhatnagar | B.Tech Computer Science & Engineering (Batch 2025–2029)  
> **Affiliation:** Apex Institute of Technology & Engineering  

---

## 📌 Project Overview

This is a modern, responsive, and cleanly structured personal portfolio website designed specifically for a **B.Tech 1st Year undergraduate student**. It highlights foundational technical skills, academic milestones, coursework, and early achievements in engineering.

The portfolio is built with **zero external framework dependencies** (pure semantic HTML5, modern CSS3, and vanilla JavaScript), ensuring ultra-fast load times, seamless responsiveness across mobile and desktop devices, and zero installation hassle.

---

## 🌟 Required Website Sections

| Section | Content Details |
| :--- | :--- |
| **1. HomePage (Hero)** | Dynamic greeting, interactive typing subtitle, real-time status pill (`B.Tech 1st Year CSE`), quick academic metrics (CGPA, DSA questions, mini-projects), interactive terminal card, and quick call-to-action buttons. |
| **2. About Me** | Personal engineering narrative, why B.Tech CSE was chosen, core principles, key highlights, quick demographic facts, and student hobbies/extracurricular activities. |
| **3. Education** | Chronological academic journey: **B.Tech CSE (Current Semester II, 9.1 CGPA, core courses)**, **Class XII CBSE Board (94.6%)**, and **Class X CBSE Board (96.2%)**. |
| **4. Skills** | Categorized technical arsenal: **Programming Languages** (C with pointers/memory, C++ STL, Python, JS), **Web Fundamentals** (HTML5, CSS3, Flexbox/Grid, DOM manipulation), **CS Concepts** (DSA, Big-O, Logic Design), and **Tools** (Git, GitHub, VS Code, GCC/GDB, Linux/Bash). |
| **5. Achievements** | Interactive filterable showcase: Competitions (Freshers' Hackathon Finalist), Coding Milestones (5-Star C Badge on HackerRank, 150+ LeetCode problems), Verified Certificates (Harvard CS50x, freeCodeCamp Responsive Web Design), and Academic Honors (State Olympiad Gold Medal). |
| **Bonus: Contact Section** | Clean inquiry form with client-side validation, direct contact details, hostel/campus location, and a dedicated **Academic Submission Note** for the professor. |

---

## 🚀 Key Features & Highlights

- 🌓 **Dark & Light Mode Switch**: Instant toggle between high-contrast dark theme and clean light theme, with user preference saved in `localStorage`.
- 🔍 **Interactive Achievements Filter**: Real-time filtering by category (`All`, `Competitions`, `Coding & Badges`, `Certificates`, `Academics`) with smooth fade animations.
- ⌨️ **Live Typing Carousel**: Animated hero banner cycling through key student descriptions.
- 📱 **100% Mobile Responsive**: Customized hamburger navigation drawer, adaptive grid layouts, and touch-friendly targets.
- ⚡ **Zero Dependencies**: Runs out-of-the-box in any modern browser without requiring `npm`, Node.js, or complex build tooling.
- ♿ **Semantic & Accessible**: Uses standard HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`), ARIA labels, and clean focus states.

---

## 📁 File Structure

```text
btech-portfolio/
├── index.html       # Semantic HTML5 markup containing all required sections
├── styles.css       # Responsive CSS3 styles with CSS custom properties & themes
├── script.js        # Vanilla JS for theme switching, typing effect, mobile nav, & filtering
└── README.md        # Documentation and presentation guide
```

---

## 💻 How to Run / Preview

### Option 1: Direct File Open (Quickest)
Simply double-click the `index.html` file in your file explorer to open it in Chrome, Edge, Firefox, or Brave.

### Option 2: Local HTTP Server (Recommended)
You can serve the directory using Python's built-in web server:

```powershell
# Navigate to the portfolio folder
cd "C:\Users\acer\.gemini\antigravity\scratch\btech-portfolio"

# Start the local server on port 8000
python -m http.server 8000
```

Then open your browser and visit:  
👉 **`http://localhost:8000`**

---

## 🎓 Tips for Presenting to Your Professor (Viva / Evaluation)

When showing this portfolio to your professor, highlight the following technical points:

1. **Architecture & Clean Code**: Explain how you separated concerns into clean semantic HTML (`index.html`), structured CSS variables with dark/light themes (`styles.css`), and modular vanilla JavaScript (`script.js`).
2. **Realistic 1st-Year Scope**: Mention that the focus is kept realistic yet ambitious for a first-year student—highlighting strong foundations in **C programming, memory layout, pointers, and problem-solving**, rather than claiming superficial mastery of advanced frameworks.
3. **Interactive Logic**: Demonstrate the **category filtering** on the Achievements section, the **form validation** logic in the Contact section, and the **localStorage theme persistence**.
4. **Responsive Layouts**: Resize the browser or use DevTools Device Toolbar to demonstrate that the layout gracefully adapts from 4K desktop down to small smartphone screens using CSS Flexbox and Grid.
