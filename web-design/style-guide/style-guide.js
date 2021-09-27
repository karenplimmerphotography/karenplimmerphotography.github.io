const text = document.getElementsByClassName('text-to-change-font');
const textToColor = document.getElementsByClassName('text');
const florenceButton = document.getElementById("florence-button");
const orangeButton = document.getElementById("orange-button");
const paleOrangeButton = document.getElementById("pale-orange-button");
const blueButton = document.getElementById("blue-button");
const paleBlueButton = document.getElementById("pale-blue-button");
const purpleButton = document.getElementById("purple-button");
const whiteButton = document.getElementById("white-button");

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
    } else {
        name.style.backgroundColor = '';
    }
}

florenceButton.addEventListener('click', function() {
    changeFont(text, 'FlorenceScript');
    changeButtonColor(florenceButton, '#f9b19b');
})

const changeTextColor = (list, newColor, newBackgroundColor) => {
    for (const item of list) {
        if (item.style.color !== newColor) {
            item.style.color = newColor;
            item.style.backgroundColor = newBackgroundColor;
        } else {
            item.style.color = '#f98562';
            item.style.backgroundColor = '#e0e4e6';
        }
        if (item.style.backgroundColor === '#fff') {
            item.style.border = '1px solid #240975;'
        }
    }
}

paleOrangeButton.addEventListener('click', function() {
    changeTextColor(textToColor, '#f9b19b', '#240975');
    changeButtonColor(paleOrangeButton, '#f9b19b');
})
orangeButton.addEventListener('click', function() {
    changeTextColor(textToColor, '#f98562', '#fff');
    changeButtonColor(orangeButton, '#f8b19b');
})
blueButton.addEventListener('click', function() {
    changeTextColor(textToColor, '#62a9fd', '#fff');
    changeButtonColor(blueButton, '#f9b19b');
})
paleBlueButton.addEventListener('click', function() {
    changeTextColor(textToColor, '#aad0fd', '#240975');
    changeButtonColor(paleBlueButton, '#f9b19b');
})
purpleButton.addEventListener('click', function() {
    changeTextColor(textToColor, '#240975', '#fff');
    changeButtonColor(purpleButton, '#f9b19b');
})
whiteButton.addEventListener('click', function() {
    changeTextColor(textToColor, '#fff', '#240975');
    changeButtonColor(whiteButton, '#f9b19b');
})




