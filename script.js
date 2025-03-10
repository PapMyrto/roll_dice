document.addEventListener("DOMContentLoaded", () => {
    const dice = document.querySelectorAll(".dice");
    const rollButton = document.querySelector(".roll-button");
    const message = document.querySelector(".message");

    rollButton.addEventListener("click", () => {
        message.textContent = "Ρίχνουμε τα ζάρια...";
        message.style.color = "#333";
        dice.forEach(die => {
            die.classList.add("rolling");
        });

        setTimeout(() => {
            let sum = 0;
            dice.forEach(die => {
                const roll = Math.floor(Math.random() * 6) + 1;
                die.textContent = getDiceFace(roll);
                sum += roll;
                die.classList.remove("rolling");
            });

            if (sum % 2 === 0) {
                message.textContent = "Κέρδισες!";
                message.style.color = "#4CAF50";
            } else {
                message.textContent = "Έχασες!";
                message.style.color = "#f44336";
            }
        }, 3000);
    });

    function getDiceFace(num) {
        const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        return faces[num - 1];
    }
});
