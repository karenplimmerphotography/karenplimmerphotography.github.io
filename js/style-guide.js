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
const logoText = document.getElementById('h1-sample');


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

const bgButton = document.getElementById('change-button-bg');
const buttonBg = document.getElementById('buttons-buttons');
const buttonBgColour = window.getComputedStyle(buttonBg).getPropertyValue('background-color');
let backgroundColours = [ 'rgb(248, 248, 248)','#fff', '#240975', '#62a9fd', '#aad0fd', '#f98562', '#f9b19b'];

buttonBg.style.backgroundColor = buttonBgColour;

const changeBgColour = () => {
    backgroundColours.push(backgroundColours[0]);
    backgroundColours.shift(backgroundColours[0]);
    buttonBg.style.backgroundColor = backgroundColours[0];
}

bgButton.addEventListener('click', changeBgColour);

const navButton = document.getElementById('show-nav-layout');
const navContent = document.getElementById('nav-layout-content');


navButton.addEventListener('click', function() {
    toggleDisplayToGrid(navContent)
});

const resetSectionButton = document.getElementById('show-reset');
const  resetContent = document.getElementById('reset-content');

 resetSectionButton.addEventListener('click', function() {
     toggleDisplay(resetContent);
     if (resetContent.style.display === 'block') {
        shortcutsContent.style.display = 'none';
        mediaContent.style.display = 'none';
    }
 });

 const mediaButton = document.getElementById('show-media-queries');
 const mediaContent = document.getElementById('media-content')

 mediaButton.addEventListener('click', function() {
    toggleDisplay(mediaContent);
    if (mediaContent.style.display === 'block') {
        resetContent.style.display = 'none';
        shortcutsContent.style.display = 'none';
    }
});

 const shortcutButton = document.getElementById('show-shortcuts');
 const shortcutsContent = document.getElementById('shortcuts-content')

 shortcutButton.addEventListener('click', function() {
    toggleDisplay(shortcutsContent);
    if (shortcutsContent.style.display === 'block') {
        resetContent.style.display = 'none';
        mediaContent.style.display = 'none';
    }
});

const mobileButton = document.getElementById('show-mobile');
const mobileContent = document.getElementById('more-mobile-content')

mobileButton.addEventListener('click', function() {
    toggleDisplayToGrid(mobileContent)
});
