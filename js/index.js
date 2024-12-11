'use strict';

let userNumbInput = prompt("Введіть тризначне число");
userNumbInput = userNumbInput?.trim();

if (!userNumbInput) {
    alert("Error: нічого не введено");
}
else if (isNaN(userNumbInput)) {
    alert("Error: це не число");
}
else {
    userNumbInput = String(Math.abs(parseInt(userNumbInput)));

    if (userNumbInput.length !== 3) {
        alert("Error: це не тризначне число");
    }
    else {
        const userNumb = userNumbInput;

        const userNumbArr = userNumbInput.split("");
        const digit1 = userNumbArr[0];
        const digit2 = userNumbArr[1];
        const digit3 = userNumbArr[2];

        const allEqual = digit1 === digit2 && digit2 === digit3 ? "так" : "ні";
        const anyEqual = digit1 === digit2 || digit1 === digit3 || digit2 === digit3 ? "так" : "ні";

        alert(`Дякую! Ваше число: ${userNumb}\nЧи є серед цифр цифри однакові? : ${anyEqual}\nЧи правда, що всі цифри однакові? : ${allEqual}`);
    }
}

