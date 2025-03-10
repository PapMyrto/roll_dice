document.addEventListener("DOMContentLoaded", () => {
    const rollButton = document.querySelector(".roll-button");
const dice = document.querySelectorAll(".dice");
const message = document.querySelector(".message");

rollButton.addEventListener("click", () => {
    message.textContent = "";
    dice.forEach((die) => {
        die.classList.add("rolling");
    });

    setTimeout(() => {
        let sum = 0;
        dice.forEach((die) => {
            const randomNum = Math.floor(Math.random() * 6) + 1;
            die.textContent = `⚀⚁⚂⚃⚄⚅`.charAt(randomNum - 1);
            die.classList.remove("rolling");
            sum += randomNum;
        });

        if (sum % 2 === 0) {
            message.textContent = "Κέρδισες!";
        } else {
            message.textContent = "Έχασες!";
        }
    }, 3000);
});


    function getDiceFace(num) {
        const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        return faces[num - 1];
    }
});
