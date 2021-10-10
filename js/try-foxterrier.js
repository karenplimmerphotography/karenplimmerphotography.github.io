/*Logo Header*/
const logoControlsButton = document.getElementById('logo-controls-button'); //show hide logo font  options immediately below header
const logoControls = document.getElementById('logo-controls'); //2 buttons showing on header
const logoButton = document.getElementById('logo-button'); //initially hidden group, generates random font
const logoTitleButton = document.getElementById('logo-title-button'); //initially hidden group, cycles through title fonts
const logoSubTitleButton = document.getElementById('logo-subtitle-button'); //initially hidden group, cycles through subtitle fonts
const caseButton = document.getElementById('case-button'); // initially hidden group, toggles upper to lowercase
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const titleClass = document.getElementsByClassName('title'); // for footer and feature logos
const subtitleClass = document.getElementsByClassName('subtitle');

logoControlsButton.addEventListener('click', function () { //toggles show/hide buttons group
    toggleDisplayToFlex(logoControls);
    logoControls.style.display === 'flex' ? logoControlsButton.textContent = 'close' : logoControlsButton.textContent = 'edit logo fonts';
})

caseButton.addEventListener('click', function () { // toggles logo text transform using class name
    title.classList.toggle('uppercase');
    subtitle.classList.toggle('uppercase');
})

//make sure all fonts are linked in the html file
const allFontsArray = ['Antic', 'Bitter', 'Cabin', 'Cairo', '"Cormorant Garamond"', 'Dosis', '"Fira Sans"', 'Forum', '"Hind Siliguri"', 'Inter', 'Lato', '"Libre Franklin"', 'Lora', 'Merriweather', 'Montserrat', 'Mulish', '"Nixie One"', '"Nothing You Could Do"', 'Noto Sans Display', 'Noto Serif', 'Nunito', '"Nunito Sans"', '"Open Sans"', 'Oxygen', '"Permanent Marker"', 'Prata', 'Poppins', 'Prata', 'PT Sans', 'Quicksand', 'Raleway', 'Roboto', '"Roboto Slab"', '"Rozha One"', 'Rubik', 'Source Sans Pro', '"Work Sans"'];
const headingFontsArray = ['"Roboto Slab"', 'Noto Serif', 'Bitter', '"Rozha One"', 'Lora', 'Prata', 'Forum', '"Nixie One"', 'Merriweather', '"Cormorant Garamond"', 'Mulish', '"Libre Franklin"', 'Noto Sans Display', 'Raleway', 'Quicksand', '"Nothing You Could Do"', '"Permanent Marker"'];
const bodyFontsArray = ['Antic', 'Bitter', 'Cabin', 'Cairo', '"Cormorant Garamond"', 'Dosis', '"Fira Sans"', '"Hind Siliguri"', 'Inter', 'Lato', '"Libre Franklin"', 'Lora', 'Merriweather', 'Montserrat', 'Mulish', '"Nixie One"', 'Noto Sans', 'Noto Serif', 'Nunito', '"Nunito Sans"', '"Open Sans"', 'Oxygen', 'Poppins', 'Prata', 'PT Sans', 'Quicksand', 'Raleway', 'Roboto', '"Roboto Slab"', 'Rubik', 'Source Sans Pro', '"Work Sans"'];
const serifFontsArray = ['Bitter', '"Cormorant Garamond"', 'Forum', 'Lora', 'Merriweather', '"Nixie One"', '"Noto Serif"', 'Prata', '"Roboto Slab"'];
const sansSerifFontsArray = ['Antic', 'Cabin', 'Cairo', 'Dosis', '"Fira Sans"', '"Hind Siliguri"', 'Inter', 'Lato', '"Libre Franklin"', 'Montserrat', 'Mulish', '"Noto Sans"', 'Nunito', '"Nunito Sans"', '"Open Sans"', 'Oxygen', 'Poppins', 'PT Sans', 'Quicksand', 'Raleway', 'Roboto', 'Rubik', 'Source Sans Pro', '"Work Sans"'];

const createRandomLogo = (element, list, array) => { // gathers both id (element) and class (list)
    let logoFontFamily = array[random(array.length)];
    element.style.fontFamily = logoFontFamily;
    if (list.length > 0) {
        for (const item of list) {
            item.style.fontFamily = logoFontFamily;
        }
    }
}

logoButton.addEventListener('click', function () { //random logo, update button text
    createRandomLogo(title, titleClass, headingFontsArray);
    createRandomLogo(subtitle, subtitleClass, sansSerifFontsArray);
    logoButton.textContent = `${title.style.fontFamily} + ${subtitle.style.fontFamily}`;
    let repl = /"/g;
    logoButton.textContent = logoButton.textContent.replace(repl, '')
})

const cycleFonts = (element, array) => { //cycles through a selected font array
    element.style.fontFamily = array[0];
    array.push(array[0]);
    array.shift(array[0]);
}

logoTitleButton.addEventListener('click', function () { // selects title font, updates buttons group text to match
    cycleFonts(title, allFontsArray);
    let repl = /"/g;
    logoTitleButton.textContent = allFontsArray[allFontsArray.length - 1];
    logoTitleButton.textContent = logoTitleButton.textContent.replace(repl, '');
    logoButton.textContent = 'random logo font';
})

logoSubTitleButton.addEventListener('click', function () { // selects subtitle font, updates buttons group text to match
    cycleFonts(subtitle, allFontsArray);
    let repl = /"/g;
    logoSubTitleButton.textContent = allFontsArray[allFontsArray.length - 1];
    logoSubTitleButton.textContent = logoSubTitleButton.textContent.replace(repl, '');
    logoButton.textContent = 'random logo font';
})

/*Headings*/
const body = document.getElementsByTagName('body');
const buttons = document.getElementsByTagName('button');
const headings = document.getElementsByClassName('heading'); // to enable matching headings to slected font
const h5headings = document.getElementsByTagName('h5'); // also have class name headings but need to be able to set back to body font
const h6headings = document.getElementsByTagName('h6');
const h5ClassHeadings = document.getElementsByClassName('h5');
const h6ClassHeadings = document.getElementsByClassName('h6');
const fontTipsButton = document.getElementById('font-tips-button'); // shows hides tips on using font buttons
const fontTips = document.getElementById('font-tips'); // to enable show/hide
const headingButton = document.getElementById('heading-button'); //sets heading font
const smallHeadingButton = document.getElementById('small-heading-button'); // sets h5 and h6 heading font
const serifBodyFontButton = document.getElementById("serif-body-font-button"); // sets body font by cycling serif fonts alphabeticaly
const sansSerifBodyFontButton = document.getElementById("sans-serif-body-font-button"); // sets body font by cycling sans-serif fonts alphabetically
const fontWeightButton = document.getElementById('font-weight-button');
const resetFontButton = document.getElementById("reset-font-button"); //resets to default fonts

//Fonts

fontTipsButton.addEventListener('click', function () { //display or hide font tips
    toggleDisplay(fontTips);
    fontTipsButton.parentElement.style.marginBottom = '1rem';
})

const toggleFontWeight = () => { // toggle body font 300/400
    body[0].style.fontWeight === '300' ? body[0].style.fontWeight = '400' : body[0].style.fontWeight = '300';
    body[0].style.fontWeight === '300' ? fontWeightButton.textContent = 'font-weight: 300' : fontWeightButton.textContent = 'font-weight: 400';
    for (const item of headings) {
        item.style.fontWeight = '400';
    }
}

fontWeightButton.addEventListener('click', toggleFontWeight);

const cycleFontsOnList = (list, array) => { //selects font and updates array ready for next click
    if (list.length > 0) {
        for (const item of list) {
            item.style.fontFamily = array[0];
        }
        array.push(array[0]);
        array.shift(array[0]);
    }
}

headingButton.addEventListener('click', function () { //cycles through heading fonts and updates button text, will update logo font also
    let repl = /"/g;
    headingButton.textContent = headingFontsArray[0].replace(repl, '');
    smallHeadingButton.textContent = 'small heading';
    logoButton.textContent = headingFontsArray[0].replace(repl, '');
    cyclePropertyOnList(headings, headingFontsArray, 'fontFamily');
    // if cycled first then font would be array.length minus one
});

const setSmallHeadingsOnList = list => { //toggles between heading and body font and updates text of small headung button
    const bodyFontFamily = window.getComputedStyle(body[0]).getPropertyValue('font-family');
    const headingFontFamily = window.getComputedStyle(headings[0]).getPropertyValue('font-family');
    for (const item of list) {
        let repl = /"/g;
        if (item.style.fontFamily === bodyFontFamily) {
            item.style.fontFamily = headingFontFamily;
            smallHeadingButton.textContent = headingFontFamily.replace(repl, '');
        } else {
            item.style.fontFamily = bodyFontFamily;
            smallHeadingButton.textContent = bodyFontFamily.replace(repl, '');
        }
    }
}

smallHeadingButton.addEventListener('click', function () { //updates content and buttons text to reflect small heading setting
    setSmallHeadingsOnList(h5headings);
    setSmallHeadingsOnList(h6headings);
    setSmallHeadingsOnList(h5ClassHeadings);
    setSmallHeadingsOnList(h6ClassHeadings);
});

serifBodyFontButton.addEventListener('click', function () { //updates content and button text content to chosen serif font
    let repl = /"/g;
    serifBodyFontButton.textContent = serifFontsArray[0].replace(repl, '');
    cycleFontsOnList(body, serifFontsArray);
    sansSerifBodyFontButton.textContent = 'sans-serif';
    smallHeadingButton.textContent = 'small heading';
    // if cycled first then font would be array.length minus one
});

sansSerifBodyFontButton.addEventListener('click', function () { // updates content and button text content to chosen sans-serif font
    let repl = /"/g;
    sansSerifBodyFontButton.textContent = sansSerifFontsArray[0].replace(repl, '');
    cycleFontsOnList(body, sansSerifFontsArray);
    serifBodyFontButton.textContent = 'serif';
    smallHeadingButton.textContent = 'small heading';
    // if cycled first then font would be array.length minus one
});

const changeFontsOnList = (list, newFont) => { //toggle a preselected new font
    for (const item of list) {
        item.style.fontFamily !== newFont ? item.style.fontFamily = newFont : item.style.fontFamily = '';
    }
}

const resetFontOnList = (font, list) => { // set to a preselected font (no toggle)
    for (const item of list) {
        item.style.fontFamily = font;
    }
}

const fullResetFonts = () => { // sets fonts all back to Raleway and sets buttons back to initial text
    resetFontOnList('Raleway', headings);
    resetFontOnList('Raleway', h5headings);
    resetFontOnList('Raleway', h6headings);
    resetFontOnList('Raleway', h5ClassHeadings);
    resetFontOnList('Raleway', h6ClassHeadings);
    document.body.style.fontFamily = "Raleway"
    headingButton.textContent = 'heading';
    smallHeadingButton.textContent = 'small heading';
    sansSerifBodyFontButton.textContent = 'sans-serif';
    serifBodyFontButton.textContent = 'serif';
    logoButton.textContent = 'random logo font';
}

resetFontButton.addEventListener('click', function () {
    fullResetFonts();
})

//COLOURS

//Preselected colour arrays
//foxterrier.co.nz

const tamsamA = ['hsl(18, 65%, 8%)', 'hsl(17, 64%, 12%)', 'rgb(19, 12, 0)', 'hsl(24, 79%, 15%)', 'hsl(17, 65%, 13%)', 'hsl(24, 70%, 8%)', 'hsl(65, 32%, 3%)', 'hsl(194, 98%, 11%)', 'rgb(9, 58, 76)', 'hsl(206, 62%, 18%'];
const tamsamB = ['hsl(20, 73%, 28%)', 'hsl(26, 86%, 30%)', 'rgb(69, 22, 3)', 'rgb(9, 58, 76)', 'hsl(193, 69%, 23%)', 'hsl(198, 23%, 25%)', 'hsl(200, 45%, 34%)', 'hsl(204, 35%, 45%)', 'hsl(206, 62%, 18%', 'hsl(227, 18%, 36%)'];
const tamsamC = ['hsl(20, 57%, 45%)', 'hsl(26, 82%, 42%)', 'hsl(31, 90%, 40%)', 'hsl(187, 74%, 34%)', 'hsl(191, 49%, 47%)', 'hsl(195, 42%, 49%)', 'hsl(198, 53%, 45%)'];
const tamsamD = ['hsl(220, 12%, 55%)', 'rgb(219, 112, 17)', 'hsl(33, 74%, 50%)', 'rgb(199, 140, 28)', 'rgb(219, 112, 17)', 'hsl(21, 71%, 51%)', 'hsl(35, 76%, 50%)', 'hsl(40, 75%, 51%)', 'hsl(186, 41%, 60%)', 'hsl(190, 54%, 62%)', 'hsl(190, 68%, 40%)', 'hsl(191, 33%, 52%)', 'hsl(203, 25%, 54%)', 'hsl(206, 22%, 50%)', 'hsl(217, 16%, 59%)', 'hsl(238, 5%, 52%)'];
const tamsamE = ['hsl(33, 72%, 59%)', 'hsl(32, 79%, 55%)', 'hsl(34, 71%, 72%)', 'hsl(190, 30%, 60%)', 'hsl(210, 23%, 76%)'];
const tamsamF = ['hsl(210, 23%, 76%)', 'hsl(186, 41%, 75%)', 'hsl(186, 41%, 60%)', 'hsl(186, 41%, 65%)', 'hsl(186, 41%, 70%)', '#80ceda', 'hsl(26, 36%, 88%)', 'hsl(32, 83%, 78%)', 'hsl(34, 71%, 72%)', 'hsl(41, 76%, 74%)', 'hsl(43, 57%, 93%)', 'hsl(182, 10%, 84%)', 'hsl(183, 10%, 90%)', 'hsl(187, 16%, 86%)', 'hsl(191, 4%, 86%)', 'hsl(194, 12%, 76%)', 'hsl(198, 10%, 73%)', 'hsl(216, 6%, 80%)', 'hsl(245, 4%, 78%)', 'hsl(241, 7%, 81%)', 'hsl(259, 5%, 85%)'];

const a = document.getElementById('a'); //circles
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const aCode = document.getElementById('a-code'); //colour code below circle
const bCode = document.getElementById('b-code');
const cCode = document.getElementById('c-code');
const dCode = document.getElementById('d-code');
const eCode = document.getElementById('e-code');
const fCode = document.getElementById('f-code');
const darkTones1 = document.getElementsByClassName('dark-1'); //background colours from html
const darkTones2 = document.getElementsByClassName('dark-2');
const midTones1 = document.getElementsByClassName('mid-1');
const midTones2 = document.getElementsByClassName('mid-2');
const midTones3 = document.getElementsByClassName('mid-3');
const lightTones1 = document.getElementsByClassName('light-1');
const tonesArray = [darkTones1, darkTones2, midTones1, midTones2, midTones3, lightTones1];
const darkTones1Text = document.getElementsByClassName('text-dark-1'); //text colours from html
const darkTones2Text = document.getElementsByClassName('text-dark-2');
const midTones1Text = document.getElementsByClassName('text-mid-1');
const midTones2Text = document.getElementsByClassName('text-mid-2');
const midTones3Text = document.getElementsByClassName('text-mid-3');
const lightTones1Text = document.getElementsByClassName('text-light-1');
const tonesTextArray = [darkTones1Text, darkTones2Text, midTones1Text, midTones2Text, midTones3Text, lightTones1Text]

let newColourA; //to save the new colours created
let newColourB;
let newColourC;
let newColourD;
let newColourE;
let newColourF;
let num1; //for saving random numbers for HSl generation
let num2;
let num3;

const createHSLNumbers = num => { //creates a HSl code with num to control lightness
    num1 = random(361);
    num2 = random(101);
    num3 = random(25) + num;
}

const changeColour = (element, list, variable, num) => { //sets the circle colours
    createHSLNumbers(num);
    variable = `hsl(${num1}, ${num2}%, ${num3}%)`;
    element.style.backgroundColor = variable;
    element.nextSibling.nextSibling.textContent = variable;
    for (const item of list) {
        item.style.backgroundColor = variable;
    }
}

const changePreSelectedColour = (element, list, array, variable) => { //sets circle colours from preconfigured arrays
    variable = array[0];
    array.push(array[0]);
    array.shift(array[0]);
    element.style.backgroundColor = variable;
    element.nextSibling.nextSibling.textContent = variable; //white space
    for (const item of list) {
        item.style.backgroundColor = variable;
    }
}

a.addEventListener('click', function () { //change the colours of the circles
    changeColour(a, darkTones1, newColourA, 0);
});

aCode.addEventListener('click', function () { //change the colours of the circles to preselected
    changePreSelectedColour(a, darkTones1, tamsamA, newColourA)
});

b.addEventListener('click', function () {
    changeColour(b, darkTones2, newColourB, 10);
});

bCode.addEventListener('click', function () {
    changePreSelectedColour(b, darkTones2, tamsamB, newColourB)
});

c.addEventListener('click', function () {
    changeColour(c, midTones1, newColourC, 25)
});

cCode.addEventListener('click', function () {
    changePreSelectedColour(c, midTones1, tamsamC, newColourC)
});

d.addEventListener('click', function () {
    changeColour(d, midTones2, newColourD, 40)
});

dCode.addEventListener('click', function () {
    changePreSelectedColour(d, midTones2, tamsamD, newColourD)
});

e.addEventListener('click', function () {
    changeColour(e, midTones3, newColourE, 55)
});

eCode.addEventListener('click', function () {
    changePreSelectedColour(e, midTones3, tamsamE, newColourE)
});

f.addEventListener('click', function () {
    changeColour(f, lightTones1, newColourF, 70)
});

fCode.addEventListener('click', function () {
    changePreSelectedColour(f, lightTones1, tamsamF, newColourF)
});


const headerColourButton = document.getElementById('header-colour-button'); //sets the text colour in the header
const headerBackgroundButton = document.getElementById('header-background-button'); //sets the header background colour
const tamsamHeader = document.getElementById('tamsam-header'); //gets header
const tamsamInnerHeader = document.getElementById('header-display'); //need to set background on this as well

const changeTextColour = element => { //cycles text colour through current circle colours
    if (element.classList.contains('text-dark-1')) {
        element.classList.replace('text-dark-1', 'text-dark-2')
        element.style.color = b.style.backgroundColor;
    } else if (element.classList.contains('text-dark-2')) {
        element.classList.replace('text-dark-2', 'text-mid-1')
        element.style.color = c.style.backgroundColor;
    } else if (element.classList.contains('text-mid-1')) {
        element.classList.replace('text-mid-1', 'text-mid-2')
        element.style.color = d.style.backgroundColor;
    } else if (element.classList.contains('text-mid-2')) {
        element.classList.replace('text-mid-2', 'text-mid-3')
        element.style.color = e.style.backgroundColor;
    } else if (element.classList.contains('text-mid-3')) {
        element.classList.replace('text-mid-3', 'text-light-1')
        element.style.color = f.style.backgroundColor;
    } else if (element.classList.contains('text-light-1')) {
        element.classList.replace('text-light-1', 'white')
        element.style.color = '#fff';
    } else {
        element.classList.add('text-dark-1')
        element.style.color = a.style.backgroundColor;
    }
}

const tamsamHomePage = document.getElementById('tamsam-home-page');
const tamsamHomePageControls = document.getElementById('tamsam-home-page-controls');

const changeHeadingsColour = list => {
    for (const item of list) {
        if (item.classList.contains('text-dark-1')) {
            item.style.color = a.style.backgroundColor;
        } else if (item.classList.contains('text-dark-2')) {
            item.style.color = b.style.backgroundColor;
        } else if (item.classList.contains('text-mid-1')) {
            item.style.color = c.style.backgroundColor;
        } else if (item.classList.contains('text-mid-2')) {
            item.style.color = d.style.backgroundColor;
        } else if (item.classList.contains('text-mid-3')) {
            item.style.color = e.style.backgroundColor;
        } else if (item.classList.contains('text-light-1')) {
            item.style.color = a.style.backgroundColor;
        }
    }
}

const changeAllHeadingsColours = array => {
    for (const item of array) {
        changeHeadingsColour(item);
    }
}

tamsamHomePageControls.addEventListener('click', function () {//doesn't update when new colour is selected
    changeAllHeadingsColours(tonesTextArray);
});

const changeBackgroundColour = element => {//cycles through header background colours
    if (element.classList.contains('dark-1')) {
        element.classList.replace('dark-1', 'dark-2')
        element.style.backgroundColor = b.style.backgroundColor;
    } else if (element.classList.contains('dark-2')) {
        element.classList.replace('dark-2', 'mid-1')
        element.style.backgroundColor = c.style.backgroundColor;
    } else if (element.classList.contains('mid-1')) {
        element.classList.replace('mid-1', 'mid-2')
        element.style.backgroundColor = d.style.backgroundColor;
    } else if (element.classList.contains('mid-2')) {
        element.classList.replace('mid-2', 'mid-3')
        element.style.backgroundColor = e.style.backgroundColor;
    } else if (element.classList.contains('mid-3')) {
        element.classList.replace('mid-3', 'light-1')
        element.style.backgroundColor = f.style.backgroundColor;
    } else if (element.classList.contains('light-1')) {
        element.classList.replace('light-1', 'bg-white')
        element.style.backgroundColor = '#fff';
    } else {
        element.classList.add('dark-1')
        element.style.backgroundColor = a.style.backgroundColor;
    }
}

headerColourButton.addEventListener('click', function () {
    changeTextColour(title);
    changeTextColour(subtitle);
});

headerBackgroundButton.addEventListener('click', function () {
    changeBackgroundColour(tamsamHeader);
    changeBackgroundColour(tamsamInnerHeader);
    changeBackgroundColour(title);
    changeBackgroundColour(subtitle);
});


const square1 = document.getElementById('square-1');
const square2 = document.getElementById('square-2');
const square3 = document.getElementById('square-3');
const square4 = document.getElementById('square-4');
const square5 = document.getElementById('square-5');
const square6 = document.getElementById('square-6');
const square7 = document.getElementById('square-7');
const square8 = document.getElementById('square-8');
const square9 = document.getElementById('square-9');
const square10 = document.getElementById('square-10');
const square11 = document.getElementById('square-11');
const square12 = document.getElementById('square-12');
const square13 = document.getElementById('square-13');
const square14 = document.getElementById('square-14');
const square15 = document.getElementById('square-15');
const square16 = document.getElementById('square-16');
const square17 = document.getElementById('square-17');
const square18 = document.getElementById('square-18');
const square19 = document.getElementById('square-19');
const square20 = document.getElementById('square-20');
const square21 = document.getElementById('square-21');
const square22 = document.getElementById('square-22');
const square23 = document.getElementById('square-23');
const square24 = document.getElementById('square-24');
const square25 = document.getElementById('square-25');
const square26 = document.getElementById('square-26');
const square27 = document.getElementById('square-27');
const square28 = document.getElementById('square-28');
const square29 = document.getElementById('square-29');
const square30 = document.getElementById('square-30');
const square31 = document.getElementById('square-31');
const square32 = document.getElementById('square-32');
const square33 = document.getElementById('square-33');
const square34 = document.getElementById('square-34');
const square35 = document.getElementById('square-35');
const square36 = document.getElementById('square-36');


const createHSLRange = (num, rangeStart, rangeEnd) => {//creates (only) numbers for HSL within hue range and lightness range
    num1 = random(361); //hue
    while (num1 < rangeStart || num1 > rangeEnd) {// select just blues etc
        num1 = random(361);
    }
    num2 = random(101);//saturation
    num3 = random(25) + num; //lightness
}

const changeColourRange = (element, list, variable, num, rangeStart, rangeEnd) => {// changes circle colour and names colour code
    createHSLRange(num, rangeStart, rangeEnd);
    variable = `hsl(${num1}, ${num2}%, ${num3}%)`;
    element.style.backgroundColor = variable;
    element.nextSibling.nextSibling.textContent = variable; //white space node
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
    changeColourRange(c, midTones1, newColourC, 25, 255, 300)
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
    changeColourRange(d, midTones2, newColourD, 40, 255, 300)
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
    changeColourRange(e, midTones3, newColourE, 55, 255, 300)
});

square30.addEventListener('click', function () {
    changeColourRange(e, midTones3, newColourE, 55, 300, 360)
});
square31.addEventListener('click', function () {
    changeColourRange(f, lightTones1, newColourF, 70, 0, 90)
});

square32.addEventListener('click', function () {
    changeColourRange(f, lightTones1, newColourF, 70, 90, 150)
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

const colourCodes = document.getElementsByClassName('colour-code'); //colour code below each circle
const colourCodesButton = document.getElementById('colour-codes-button'); //hides or shows colour codes

const toggleColourNames = list => {//toggles show or hide codes for each item in colour codes node list
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

colourCodesButton.addEventListener('click', function () { //toggles show or hide colour codes 
    toggleColourNames(colourCodes)
});

const coloursInfo = document.getElementById('colours-info'); //explanation of colours, initially display none
const colourTips = document.getElementById('colour-info-button'); //button to shows hide explanation of colours
const fix = document.getElementById('fix-colour-samples-button');//button to set fixed position on colour circles
const samples = document.getElementById('colours');//the entire circles and codes section which will be fixed
const colourControls = document.getElementById('colour-controls');//set of 4 buttons, moves down page when fixed
const squaresButton = document.getElementById('tiny-squares-button');// to show or hide
const allSquares = document.getElementsByClassName('colour-squares');// all sets of 6 tiny squares
const header = document.getElementsByTagName('header'); // hide the header when fix colours

const fixColourSamples = () => {
    if (window.getComputedStyle(samples).getPropertyValue('position') !== 'fixed') {
        samples.style.position = 'fixed';
        colourControls.style.top = '-40px';
        toggleDisplay(header[0]);
        toggleColourNames(colourCodes);
    } else {
        samples.style.position = '';
        samples.style.marginTop = '';
        colourControls.style.top = '';
        toggleDisplay(header[0]);
        toggleColourNames(colourCodes);
    }
}

const hideColouredSquares = () => {
    for (const item of allSquares) {
        toggleDisplayToFlex(item);
    }
}

colourTips.addEventListener('click', function () {//shows hide colour explanation block
    toggleDisplay(coloursInfo)
});

squaresButton.addEventListener('click', hideColouredSquares); //show hides tiny squares
fix.addEventListener('click', fixColourSamples); // fixes circles in place

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