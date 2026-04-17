let passCount = 0;

function setPass() {
    let password = "";

    do {
        password = prompt("Enter a password longer than 4 characters", "");
        if (password === null) {
            return;
        }
    } while (password.length < 5);

    passCount += 1;
    const counterDisplay = document.getElementById("counterDisplay");
    if (counterDisplay) {
        counterDisplay.textContent = `Pass count: ${passCount}`;
    }

    window.alert("Password set successfully!");
}

const incrementBtn = document.getElementById("incrementBtn");
if (incrementBtn) {
    incrementBtn.addEventListener("click", setPass);
} else {
    console.error("Button with id 'incrementBtn' not found.");
}