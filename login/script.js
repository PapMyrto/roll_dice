let users = {};

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username && password) {
        if (users[username]) {
            message.textContent = "Το όνομα χρήστη υπάρχει ήδη!";
        } else {
            users[username] = password;
            message.textContent = "Εγγραφή επιτυχής! Μπορείς να συνδεθείς.";
        }
    } else {
        message.textContent = "Συμπλήρωσε όλα τα πεδία!";
    }
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (users[username] && users[username] === password) {
        message.textContent = "Σύνδεση επιτυχής! Καλώς ήρθες!";
        setTimeout(() => {
            window.location.href = "../index.html";

        }, 1500);
    } else {
        message.textContent = "Λάθος όνομα χρήστη ή κωδικός!";
    }
}
