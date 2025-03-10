document.addEventListener("DOMContentLoaded", () => {
    const dice = document.querySelectorAll(".dice");
    const rollButton = document.querySelector(".roll-button");
    const message = document.querySelector(".message");

    rollButton.addEventListener("click", () => {
        message.textContent = "Ρίχνουμε τα ζάρια...";
        let sum = 0;

        dice.forEach(die => {
            const roll = Math.floor(Math.random() * 6) + 1;
            die.textContent = getDiceFace(roll);
            sum += roll;
        });

        if (sum % 2 === 0) {
            message.textContent = "Κέρδισες!";
            message.style.color = "#4CAF50";
        } else {
            message.textContent = "Έχασες!";
            message.style.color = "#f44336";
        }
    });

    function getDiceFace(num) {
        const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        return faces[num - 1];
    }
});
