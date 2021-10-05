// HEADINGS
const text = document.getElementsByClassName('text-to-change-font');
const textToColor = document.getElementsByClassName('text-to-change-colour');
const fontButton = document.getElementById("font-button");
const goldButton = document.getElementById("gold-button");
const tealButton = document.getElementById("teal-button");
const darkButton = document.getElementById("dark-button");
const resetButton = document.getElementById("reset-button");
const allButtons = document.getElementsByClassName('text-example-button');


const toggleFont = (list, classNameToAdd) => {
    for (const item of list) {
        if (!item.classList.contains(classNameToAdd)) {
            item.classList.add(classNameToAdd);
        } else {
            item.classList.remove(classNameToAdd)
        }
    }
}

const changeTextColor = (list, className, newColor, newBackgroundColor) => {
    for (const item of list) {
        if (!item.classList.contains(className)) {
            item.classList.add(className)
        }
        if (item.style.color !== newColor) {
            item.style.color = newColor;
            item.style.backgroundColor = newBackgroundColor;
        }
    }
}

const changeAllButtons = (list, newColor, newButtonBackgroundColor) => {
    for (const item of list) {
        if (item.style.backgroundColor !== newButtonBackgroundColor) {
            item.style.backgroundColor = newButtonBackgroundColor;
            item.style.color = newColor;
        } else {
            item.style.backgroundColor = '';
        }
    }
}

const changeButtonColor = (name, newColor, newBackgroundColor) => {
    if (name.style.backgroundColor !== newBackgroundColor) {
        name.style.color = newColor;
        name.style.backgroundColor = newBackgroundColor;
    }
}

const resetTextColor = (list, classNameToAdd, classNameToRemove) => {
    for (const item of list) {
        item.style.color = '';
        item.style.backgroundColor = '';
        item.classList.add(classNameToAdd);
        item.classList.remove(classNameToRemove);
    }
}

fontButton.addEventListener('click', function () {
    toggleFont(text, 'nothing');
    changeButtonColor(fontButton, '#fff', 'rgba(4, 122, 140, 0.7)');
})
goldButton.addEventListener('click', function () {
    changeTextColor(textToColor, 'nothing', 'rgb(199, 140, 28);', '#fff');
    changeButtonColor(orangeButton, '#fff', 'rgba(4, 122, 140, 0.7)');
})
tealButton.addEventListener('click', function () {
    changeTextColor(textToColor, 'nothing', 'rgb(4, 122, 140)', '#fff');
    changeButtonColor(tealButton, '#fff', 'rgba(4, 122, 140, 0.7)');
})
darkButton.addEventListener('click', function () {
    changeTextColor(textToColor, 'nothing', 'rgb(255, 255, 255)', 'rgb(34, 2, 0)');
    changeButtonColor(darkButton, '#fff', 'rgba(4, 122, 140, 0.7)');
})
resetButton.addEventListener('click', function () {
    resetTextColor(textToColor, 'rozha', 'nothing');
    changeAllButtons(allButtons, '#222', '#80ceda');
})

const bgButton = document.getElementById('change-button-bg');
const buttonBg = document.getElementById('buttons-buttons');

const footer = document.getElementById('tamsam-footer-logo-on-dark');
const links = document.getElementsByClassName('links-and-lists-article');


const changeBgColourRandom = name => {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    name.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`
}

const changeBgColourRandomList = list => {
    for (const item of list) {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    item.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`
}
}

bgButton.addEventListener('click', function() {
    changeBgColourRandom(buttonBg)
});

/*links[0].addEventListener('click', function() {
    changeBgColourRandomList(links);
    links[1].style.backgroundColor = 'rgb(4, 122, 140)'
});*/


/*footer.addEventListener('click', function() {
    changeBgColourRandom(footer)
})*/

coloursArray = []

const changeBgColour = name => {
    name.style.backgroundColor = coloursArray[0];
    coloursArray.push(coloursArray[0]);
    coloursArray.shift(coloursArray[0]);
}

const navButton = document.getElementById('show-nav-layout');
const navContent = document.getElementById('nav-layout-content');


navButton.addEventListener('click', function () {
    toggleDisplayToGrid(navContent)
});

const resetSectionButton = document.getElementById('show-reset');
const resetContent = document.getElementById('reset-content');

resetSectionButton.addEventListener('click', function () {
    toggleDisplay(resetContent);
    if (resetContent.style.display === 'block') {
        shortcutsContent.style.display = 'none';
        mediaContent.style.display = 'none';
    }
});

const mediaButton = document.getElementById('show-media-queries');
const mediaContent = document.getElementById('media-content')

mediaButton.addEventListener('click', function () {
    toggleDisplay(mediaContent);
    if (mediaContent.style.display === 'block') {
        resetContent.style.display = 'none';
        shortcutsContent.style.display = 'none';
    }
});

const shortcutButton = document.getElementById('show-shortcuts');
const shortcutsContent = document.getElementById('shortcuts-content')

shortcutButton.addEventListener('click', function () {
    toggleDisplay(shortcutsContent);
    if (shortcutsContent.style.display === 'block') {
        resetContent.style.display = 'none';
        mediaContent.style.display = 'none';
    }
});

const mobileButton = document.getElementById('show-mobile');
const mobileContent = document.getElementById('more-mobile-content')

mobileButton.addEventListener('click', function () {
    toggleDisplayToGrid(mobileContent)
});

const fontsArray = [ 'Poppins', 'Quicksand', 'Antic', 'Prata', '"Indie Flower"', '"Architects Daughter"', '"Noto Serif"', '"Noto Sans"']

const changeBodyFont = ()=> {
    document.body.style.fontFamily = fontsArray[0];
    fontsArray.push(fontsArray[0]);
    fontsArray.shift(fontsArray[0]);
}

//bgButton.addEventListener('click', changeBodyFont);