const text = document.getElementsByClassName('text-to-change-font');
const textToColor = document.getElementsByClassName('text');
const florenceButton = document.getElementById("florence-button");
const orangeButton = document.getElementById("orange-button");
const paleOrangeButton = document.getElementById("pale-orange-button");
const blueButton = document.getElementById("blue-button");
const paleBlueButton = document.getElementById("pale-blue-button");
const purpleButton = document.getElementById("purple-button");
const whiteButton = document.getElementById("white-button");
const resetButton = document.getElementById("reset-button");
const logoText =document.getElementById('h1-sample');


const changeFont = (list, newFont) => {
    for (const item of list) {
        if (item.style.fontFamily !== newFont) {
            item.style.fontFamily = newFont;
        } else {
            item.style.fontFamily = '';
        }
    }
}

const changeButtonColor = (name, newBackgroundColor) => {
    if (name.style.backgroundColor !== newBackgroundColor) {
        name.style.backgroundColor = newBackgroundColor;
    }
}

florenceButton.addEventListener('click', function () {
    changeFont(text, 'FlorenceScript');
    changeButtonColor(florenceButton, '#aad0fd');
})

const changeTextColor = (list, newColor, newBackgroundColor) => {
    for (const item of list) {
        if (item.style.color !== newColor) {
            item.style.color = newColor;
            item.style.backgroundColor = newBackgroundColor;
            item.style.backgroundImage = 'none';
        } 
}
}

const changeBgImage = list => {
    for (const item of list) {
    item.style.color = '#fff';
    item.style.backgroundColor = '#240975';
    item.style.backgroundImage = '';
}
}

paleOrangeButton.addEventListener('click', function () {
    changeTextColor(textToColor, '#f9b19b', '#240975');
    changeButtonColor(paleOrangeButton, '#aad0fd');
})
orangeButton.addEventListener('click', function () {
    changeTextColor(textToColor, '#f98562', '#fff');
    changeButtonColor(orangeButton, '#aad0fd');
})
blueButton.addEventListener('click', function () {
    changeTextColor(textToColor, '#62a9fd', '#fff');
    changeButtonColor(blueButton, '#aad0fd');
})
paleBlueButton.addEventListener('click', function () {
    changeTextColor(textToColor, '#aad0fd', '#240975');
    changeButtonColor(paleBlueButton, '#aad0fd');
})
purpleButton.addEventListener('click', function () {
    changeTextColor(textToColor, '#240975', '#fff');
    changeButtonColor(purpleButton, '#aad0fd');
})
whiteButton.addEventListener('click', function () {
    changeTextColor(textToColor, '#fff', '#240975');
    changeButtonColor(whiteButton, '#aad0fd');
})
resetButton.addEventListener('click', function () {
    changeBgImage(textToColor);
    changeButtonColor(resetButton, '#f9b19b');
})