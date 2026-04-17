function promptForPassword() {
    while (true) {
        const password = prompt("Enter a password (at least 4 characters):");
        if (password === null) {
            alert("Password entry canceled.");
            return;
        }

        if (password.length >= 4) {
            alert("Password accepted!");
            return;
        }

        alert("Password must be at least 4 characters. Please try again.");
    }
}

promptForPassword();

document.addEventListener("DOMContentLoaded", () => {
    const incrementButton = document.getElementById("incrementBtn");
    const counterDisplay = document.getElementById("counterDisplay");

    if (!incrementButton || !counterDisplay) {
        console.error("Increment button or counter display not found.");
        return;
    }

    let passCount = 0;
    incrementButton.addEventListener("click", () => {
        passCount += 1;
        counterDisplay.textContent = `Pass count: ${passCount}`;
    });
});