// This runs when the page loads, but ONLY shows the date, not the diary
window.onload = function() {
    const now = new Date();
    document.getElementById('date-display').textContent = now.toDateString();
};

function encryptAndSave() {
    const password = document.getElementById('userPass').value;
    const text = document.getElementById('diary-input').value;

    if (!password) {
        alert("Please enter a password to lock your entry!");
        return;
    }

    // SCRAMBLE THE TEXT
    const encryptedText = CryptoJS.AES.encrypt(text, password).toString();
    localStorage.setItem('secure_diary_data', encryptedText);
    
    // Visual Feedback
    document.getElementById('status').textContent = "Encrypted & Saved!";
    setTimeout(() => { document.getElementById('status').textContent = ""; }, 2000);
}

function unlockDiary() {
    const password = document.getElementById('userPass').value;
    const encryptedData = localStorage.getItem('secure_diary_data');

    if (!password) {
        alert("Enter your password to unlock.");
        return;
    }

    if (!encryptedData) {
        alert("No saved diary found. Starting a new one!");
        showDiaryArea();
        return;
    }

    try {
        // UNSCRAMBLE THE TEXT
        const bytes = CryptoJS.AES.decrypt(encryptedData, password);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);

        if (originalText.length > 0) {
            document.getElementById('diary-input').value = originalText;
            showDiaryArea();
        } else {
            alert("Wrong password! Access denied.");
        }
    } catch (e) {
        alert("Error: Incorrect password.");
    }
}

function showDiaryArea() {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('diary-area').style.display = 'block';
}
