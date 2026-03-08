<div align="center">

# 🔐 Multi-User Secure Private Diary
### Advanced Web Development & Cybersecurity Project
**Student Name:** [Your Name]  
**Student ID:** [Your ID]

</div>

---

## 📖 Project Overview
This is a **privacy-first** digital diary application. It allows multiple users to save their personal thoughts on a single device with **End-to-End Encryption (E2EE)**. Even the host cannot read the entries because they are scrambled before being saved.



## ✨ Key Features
* **Multi-User Support:** Users can create unique diaries identified by their username.
* **Military-Grade Encryption:** Uses the **AES-256** algorithm via the CryptoJS library.
* **Mobile Responsive:** Optimized for smartphones, tablets, and desktops using CSS Flexbox.
* **No Server Leaks:** Data stays in the user's browser `localStorage`. No data is ever sent to a central server.
* **Secure Logout:** A "Lock" feature that clears the session memory immediately.

## 🛠️ Technology Stack
| Technology | Role |
| :--- | :--- |
| **HTML5** | Semantic structure and user interface |
| **CSS3** | Mobile-responsive styling & layout |
| **JavaScript** | Logic for multi-user handling and storage |
| **CryptoJS** | Client-side data encryption and decryption |



## 🛡️ Security Logic
The project follows a **Zero-Knowledge** architecture:
1. The user provides a **Username** (to find the data) and a **Password** (the key).
2. The **CryptoJS** library scrambles the text into a "Ciphertext" string.
3. Only this scrambled string is saved in the browser.
4. Without the exact password, the data is mathematically impossible to read.

## 📱 Mobile Compatibility
The interface is designed with a **Mobile-First** approach:
* Large touch-friendly buttons.
* Responsive widths (`90%` viewport scaling).
* `16px` font sizes to prevent automatic zoom on iOS devices.

---
<div align="center">
  <sub>Developed for educational purposes in Web Development and DBMS.</sub>
</div>
}
