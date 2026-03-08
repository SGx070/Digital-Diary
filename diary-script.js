function encryptAndSave() {
    const user = document.getElementById('userName').value.trim().toLowerCase();
    const pass = document.getElementById('userPass').value;
    const text = document.getElementById('diary-input').value;

    if (!user || !pass) return alert("Enter Username and Password!");

    // Encrypt the text
    const encrypted = CryptoJS.AES.encrypt(text, pass).toString();
    
    // Save with a unique key for THIS user
    localStorage.setItem('diary_user_' + user, encrypted);
    
    document.getElementById('status').textContent = "Saved for " + user;
}

function unlockDiary() {
    const user = document.getElementById('userName').value.trim().toLowerCase();
    const pass = document.getElementById('userPass').value;
    
    // Look for data specific to this username
    const encryptedData = localStorage.getItem('diary_user_' + user);

    if (!encryptedData) {
        alert("No diary found for " + user + ". Starting a new one!");
        showDiary(user);
        return;
    }

    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, pass);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);

        if (originalText) {
            document.getElementById('diary-input').value = originalText;
            showDiary(user);
        } else {
            alert("Wrong password for this user!");
        }
    } catch (e) {
        alert("Access Denied.");
    }
}

function showDiary(user) {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('diary-area').style.display = 'block';
    document.getElementById('welcome-user').textContent = "Hello, " + user;
}

function lockDiary() {
    location.reload();
}
