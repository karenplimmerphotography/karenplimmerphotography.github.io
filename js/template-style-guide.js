//FONTS
const changeFont = (list, newFont) => {
    for (const item of list) {
        if (item.style.fontFamily !== newFont) {
            item.style.fontFamily = newFont;
        } else {
            item.style.fontFamily = '';
        }
    }
}
const headings = document.getElementsByClassName('heading');
const headingButton = document.getElementById('heading-button');
const newHeadingFontsArray = ['"Roboto Slab"', 'Bitter', 'Lora', 'Prata', 'Noto Serif', 'Forum', '"Nixie One"', 'Merriweather', '"Cormorant Garamond"', 'Mulish', 'Raleway', 'Quicksand'];
const tryHeadingFonts = list => {
    for (const item of list) {
        item.style.fontFamily = newHeadingFontsArray[0];
    }
    headingButton.textContent = newHeadingFontsArray[0];
    newHeadingFontsArray.push(newHeadingFontsArray[0]);
    newHeadingFontsArray.shift(newHeadingFontsArray[0]);
}
headingButton.addEventListener('click', function () {
    tryHeadingFonts(headings)
});


const newFontButton = document.getElementById("new-font-button");
const newFontsArray = ['Bitter', 'Cabin', 'Cairo', '"Cormorant Garamond"', 'Dosis', '"Fira Sans"', '"Hind Siliguri"', 'Inter', 'Lato', 'Lora', 'Merriweather', 'Montserrat', 'Mulish', '"Nixie One"', 'Noto Sans', 'Noto Serif', 'Nunito', '"Nunito Sans"', '"Open Sans"', 'Oxygen', 'Poppins', 'Prata', 'PT Sans', 'Raleway', 'Roboto', '"Roboto Slab"', 'Rubik', 'Source Sans Pro', 'Quicksand'];
const tryFonts = () => {
    document.body.style.fontFamily = newFontsArray[0];
    newFontButton.textContent = newFontsArray[0];
    newFontsArray.push(newFontsArray[0]);
    newFontsArray.shift(newFontsArray[0]);
}
newFontButton.addEventListener('click', tryFonts);

//COLOURS
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const darkTones1 = document.getElementsByClassName('dark-1');
const darkTones2 = document.getElementsByClassName('dark-2');
const midTones1 = document.getElementsByClassName('mid-1');
const midTones2 = document.getElementsByClassName('mid-2');
const midTones3 = document.getElementsByClassName('mid-3');
const lightTones1 = document.getElementsByClassName('light-1');

const random = num => Math.floor(Math.random() * num);
let newColourA;
let newColourB;
let newColourC;
let newColourD;
let newColourE;
let newColourF;
let num1;
let num2;
let num3;

const createHSLNumbers = num => {
    num1 = random(361);
    num2 = random(101);
    num3 = random(25) + num;
}

const changeColour = (element, list, variable, num) => {
    createHSLNumbers(num);
    variable = `hsl(${num1}, ${num2}%, ${num3}%)`;
    element.style.backgroundColor = variable;
    element.nextSibling.nextSibling.textContent = variable;
    for (const item of list) {
        item.style.backgroundColor = variable;
    }
}

a.addEventListener('click', function () {
    changeColour(a, darkTones1, newColourA, 0)
});

b.addEventListener('click', function () {
    changeColour(b, darkTones2, newColourB, 10)
});

c.addEventListener('click', function () {
    changeColour(c, midTones1, newColourC, 25)
});

d.addEventListener('click', function () {
    changeColour(d, midTones2, newColourD, 40)
});

e.addEventListener('click', function () {
    changeColour(e, midTones3, newColourE, 55)
});

f.addEventListener('click', function () {
    changeColour(f, lightTones1, newColourF, 70)
});

const square1= document.getElementById('square-1');
const square2= document.getElementById('square-2');
const square3= document.getElementById('square-3');
const square4= document.getElementById('square-4');
const square5= document.getElementById('square-5');
const square6= document.getElementById('square-6');
const square7= document.getElementById('square-7');
const square8= document.getElementById('square-8');
const square9= document.getElementById('square-9');
const square10= document.getElementById('square-10');
const square11= document.getElementById('square-11');
const square12= document.getElementById('square-12');
const square13= document.getElementById('square-13');
const square14= document.getElementById('square-14');
const square15= document.getElementById('square-15');
const square16= document.getElementById('square-16');
const square17= document.getElementById('square-17');
const square18= document.getElementById('square-18');
const square19= document.getElementById('square-19');
const square20= document.getElementById('square-20');
const square21= document.getElementById('square-21');
const square22= document.getElementById('square-22');
const square23= document.getElementById('square-23');
const square24= document.getElementById('square-24');
const square25= document.getElementById('square-25');
const square26= document.getElementById('square-26');
const square27= document.getElementById('square-27');
const square28= document.getElementById('square-28');
const square29= document.getElementById('square-29');
const square30= document.getElementById('square-30');
const square31= document.getElementById('square-31');
const square32= document.getElementById('square-32');
const square33= document.getElementById('square-33');
const square34= document.getElementById('square-34');
const square35= document.getElementById('square-35');
const square36= document.getElementById('square-36');


const createHSLRange = (num, rangeStart, rangeEnd) => {
    num1 = random(361);
    while (num1 < rangeStart || num1 > rangeEnd) {
        num1 = random(361);
    }
    num2 = random(101);
    num3 = random(25) + num;
}

const changeColourRange = (element, list, variable, num, rangeStart, rangeEnd) => {
    createHSLRange(num, rangeStart, rangeEnd);
    variable = `hsl(${num1}, ${num2}%, ${num3}%)`;
    element.style.backgroundColor = variable;
    element.nextSibling.nextSibling.textContent = variable;
    for (const item of list) {
        item.style.backgroundColor = variable;
    }
}

square1.addEventListener('click', function () {
    changeColourRange(a, darkTones1, newColourA, 0, 0, 90)
});

square2.addEventListener('click', function () {
    changeColourRange(a, darkTones1, newColourA, 0, 90, 150)
});

square3.addEventListener('click', function () {
    changeColourRange(a, darkTones1, newColourA, 0, 150, 210)
});

square4.addEventListener('click', function () {
    changeColourRange(a, darkTones1, newColourA, 0, 210, 255)
});

square5.addEventListener('click', function () {
    changeColourRange(a, darkTones1, newColourA, 0, 255, 300)
});

square6.addEventListener('click', function () {
    changeColourRange(a, darkTones1, newColourB, 0, 300, 360)
});

square7.addEventListener('click', function () {
    changeColourRange(b, darkTones2, newColourB, 10, 0, 90)
});

square8.addEventListener('click', function () {
    changeColourRange(b, darkTones2, newColourB, 10, 90, 150)
});

square9.addEventListener('click', function () {
    changeColourRange(b, darkTones2, newColourB, 10, 150, 210)
});

square10.addEventListener('click', function () {
    changeColourRange(b, darkTones2, newColourB, 10, 210, 255)
});

square11.addEventListener('click', function () {
    changeColourRange(b, darkTones2, newColourB, 10, 255, 300)
});

square12.addEventListener('click', function () {
    changeColourRange(b, darkTones2, newColourB, 10, 300, 360)
});

square13.addEventListener('click', function () {
    changeColourRange(c, midTones1, newColourC, 25, 0, 90)
});

square14.addEventListener('click', function () {
    changeColourRange(c, midTones1, newColourC, 25, 90, 150)
});

square15.addEventListener('click', function () {
    changeColourRange(c, midTones1, newColourC, 25, 150, 210)
});

square16.addEventListener('click', function () {
    changeColourRange(c, midTones1, newColourC, 25, 210, 255)
});

square17.addEventListener('click', function () {
    changeColourRange(c, midTones1,  newColourC, 25, 255, 300)
});

square18.addEventListener('click', function () {
    changeColourRange(c, midTones1, newColourC, 25, 300, 360)
});

square19.addEventListener('click', function () {
    changeColourRange(d, midTones2, newColourD, 40, 0, 90)
});

square20.addEventListener('click', function () {
    changeColourRange(d, midTones2, newColourD, 40, 90, 150)
});

square21.addEventListener('click', function () {
    changeColourRange(d, midTones2, newColourD, 40, 150, 210)
});

square22.addEventListener('click', function () {
    changeColourRange(d, midTones2, newColourD, 40, 210, 255)
});

square23.addEventListener('click', function () {
    changeColourRange(d, midTones2,  newColourD, 40, 255, 300)
});

square24.addEventListener('click', function () {
    changeColourRange(d, midTones2, newColourD, 40, 300, 360)
});
square25.addEventListener('click', function () {
    changeColourRange(e, midTones3, newColourE, 55, 0, 90)
});

square26.addEventListener('click', function () {
    changeColourRange(e, midTones3, newColourE, 55, 90, 150)
});

square27.addEventListener('click', function () {
    changeColourRange(e, midTones3, newColourE, 55, 150, 210)
});

square28.addEventListener('click', function () {
    changeColourRange(e, midTones3, newColourE, 55, 210, 255)
});

square29.addEventListener('click', function () {
    changeColourRange(e, midTones3,  newColourE, 55, 255, 300)
});

square30.addEventListener('click', function () {
    changeColourRange(e, midTones3, newColourE, 55, 300, 360)
});
square31.addEventListener('click', function () {
    changeColourRange(f, lightTones1, newColourF, 70, 0, 90)
});

square32.addEventListener('click', function () {
    changeColourRange(f, lightTones1, newColourF, 70 ,90, 150)
});

square33.addEventListener('click', function () {
    changeColourRange(f, lightTones1, newColourF, 70, 150, 210)
});

square34.addEventListener('click', function () {
    changeColourRange(f, lightTones1, newColourF, 70, 210, 255)
});

square35.addEventListener('click', function () {
    changeColourRange(f, lightTones1, newColourF, 70, 255, 300)
});

square36.addEventListener('click', function () {
    changeColourRange(f, lightTones1, newColourF, 70, 300, 360)
});

const colourCodes = document.getElementsByClassName('colour-code');
const colourCodesButton = document.getElementById('colour-codes-button');

const toggleColourNames = list => {
    if (list.length > 0) {
        for (const item of list) {
            if (item.style.display !== 'none') {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        }
    }
}
colourCodesButton.addEventListener('click', function () {
    toggleColourNames(colourCodes)
});

const fix = document.getElementById('fix-colour-samples-button');
const samples = document.getElementById('colours');
const colourControls = document.getElementById('colour-controls');
const coloursHeading = document.getElementById('colours-heading');

const fixColourSamples = () => {
    if (window.getComputedStyle(samples).getPropertyValue('position') !== 'fixed') {
        samples.style.position = 'fixed';
        colourControls.style.marginTop ='6rem';
        colourControls.style.top = '-75px';
        coloursHeading.style.display = 'none';
        toggleColourNames(colourCodes);
    } else {
        samples.style.position = '';
        colourControls.style.top = '';
        colourControls.style.marginTop = '';
        coloursHeading.style.display ="";
        toggleColourNames(colourCodes);
    }
}
fix.addEventListener('click', fixColourSamples);






/*
const text = document.getElementsByClassName('text-to-change-font');
const textToColor = document.getElementsByClassName('text');
const fontButton = document.getElementById("font-button");
const aButton = document.getElementById("a-button");
const bButton = document.getElementById("b-button");
const cButton = document.getElementById("c-button");
const dButton = document.getElementById("d-button");
const eButton = document.getElementById("e-button");
const fButton = document.getElementById("f-button");
const resetButton = document.getElementById("reset-button");
const allButtons = document.getElementsByClassName('text-example-button');

const changeAllButtons = (list, newButtonBackgroundColor) => {
    for (const item of list) {
        if (item.style.backgroundColor !== newButtonBackgroundColor) {
            item.style.backgroundColor = newButtonBackgroundColor;
        } else {
            item.style.backgroundColor = '';
        }
    }
}

const changeButtonColor = (name, newBackgroundColor) => {
    if (name.style.backgroundColor !== newBackgroundColor) {
        name.style.backgroundColor = newBackgroundColor;
    }
}

fontButton.addEventListener('click', function () {
    changeFont(text, 'FlorenceScript');
    changeButtonColor(fontButton, '#aad0fd');
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
        item.style.backgroundColor = '#222';
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
    changeAllButtons(allButtons, '#f9b19b');
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

*/