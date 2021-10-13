/*Logo Header*/
const body = document.getElementsByTagName('body');
const tamsamHeader = document.getElementById('tamsam-header'); //gets top header
const tamsamHeaderLogo = document.getElementById('tamsam-header-logo'); //need to set background on this as well
const homeHeader = document.getElementById('home-page-header'); //gets header
const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');
const footerClass = document.getElementsByClassName('footer');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const titleHome = document.getElementById('home-title');
const subtitleHome = document.getElementById('home-subtitle');
const titleClass = document.getElementsByClassName('title'); // for footer and feature logos
const subtitleClass = document.getElementsByClassName('subtitle');
const logoLeft = document.getElementById('logo-left');
const logoRight = document.getElementById('logo-right');

const headerButtonsContainer = document.getElementById('header-buttons-container'); //contains 2 buttons showing on header (colour headings and colour background)
const colourHeadingsButton = document.getElementsByClassName('colour-headings-button'); //sets the text colour in the header
const colourBackgroundButton = document.getElementsByClassName('colour-background-button'); //sets the header background colour
const editButton = document.getElementById('edit-button'); //show hide logo font options immediately below header
const pageEditButton = document.getElementById('page-edit-button'); //show hide edit options immediately below header on tamsam page
const editButtonsGroup = document.getElementById('edit-buttons-group'); //the group of buttons to show hide 
const allPageButtons = document.getElementById('all-page-buttons'); //the group of buttons to show hide  on the tamsam page
const randomLogoButton = document.getElementsByClassName('random-logo-button'); //initially one of hidden group, generates random font
const logoTitleButton = document.getElementsByClassName('logo-title-button'); //initially one of hidden group, cycles through title fonts
const logoSubTitleButton = document.getElementsByClassName('logo-subtitle-button'); //initially one of hidden group, cycles through subtitle fonts
const caseButton = document.getElementsByClassName('case-button'); // initially one of hidden group, toggles upper to lowercase
const favouritesButton = document.getElementsByClassName('favourites-button');
const subHeaderButtons = document.getElementById('sub-header-buttons');

//make sure all fonts are linked in the html file
const allFontsArray = ['Antic', 'Bitter', 'Cabin', 'Cairo', '"Cormorant Garamond"', 'Dosis', '"Fira Sans"', 'Forum', '"Hind Siliguri"', 'Inter', 'Lato', '"Libre Franklin"', 'Lora', 'Merriweather', 'Montserrat', 'Mulish', '"Nixie One"', '"Nothing You Could Do"', 'Noto Sans Display', 'Noto Serif', 'Nunito', '"Nunito Sans"', '"Open Sans"', 'Oxygen', '"Permanent Marker"', 'Prata', 'Poppins', 'Prata', 'PT Sans', 'Quicksand', 'Raleway', 'Roboto', '"Roboto Slab"', '"Rozha One"', 'Rubik', 'Source Sans Pro', '"Work Sans"'];
const headingFontsArray = ['"Roboto Slab"', 'Noto Serif', 'Bitter', '"Rozha One"', 'Lora', 'Prata', 'Forum', '"Nixie One"', 'Merriweather', '"Cormorant Garamond"', 'Mulish', '"Libre Franklin"', 'Noto Sans Display', 'Raleway', 'Quicksand', '"Nothing You Could Do"', '"Permanent Marker"'];
const bodyFontsArray = ['Antic', 'Bitter', 'Cabin', 'Cairo', '"Cormorant Garamond"', 'Dosis', '"Fira Sans"', '"Hind Siliguri"', 'Inter', 'Lato', '"Libre Franklin"', 'Lora', 'Merriweather', 'Montserrat', 'Mulish', '"Nixie One"', 'Noto Sans', 'Noto Serif', 'Nunito', '"Nunito Sans"', '"Open Sans"', 'Oxygen', 'Poppins', 'Prata', 'PT Sans', 'Quicksand', 'Raleway', 'Roboto', '"Roboto Slab"', 'Rubik', 'Source Sans Pro', '"Work Sans"'];
const serifFontsArray = ['Bitter', '"Cormorant Garamond"', 'Forum', 'Lora', 'Merriweather', '"Nixie One"', '"Noto Serif"', 'Prata', '"Roboto Slab"'];
const sansSerifFontsArray = ['Antic', 'Cabin', 'Cairo', 'Dosis', '"Fira Sans"', '"Hind Siliguri"', 'Inter', 'Lato', '"Libre Franklin"', 'Montserrat', 'Mulish', '"Noto Sans"', 'Nunito', '"Nunito Sans"', '"Open Sans"', 'Oxygen', 'Poppins', 'PT Sans', 'Quicksand', 'Raleway', 'Roboto', 'Rubik', 'Source Sans Pro', '"Work Sans"'];

const buttons = document.getElementsByTagName('button');
const headings = document.getElementsByClassName('heading'); // to enable matching headings to selected font
const headingToColour = document.getElementsByClassName('heading-to-colour');
const h5headings = document.getElementsByTagName('h5'); // also have class name headings but need to be able to set back to body font
const h6headings = document.getElementsByTagName('h6');
const h5ClassHeadings = document.getElementsByClassName('h5');
const h6ClassHeadings = document.getElementsByClassName('h6');
const fontTipsButton = document.getElementById('font-tips-button'); // shows hides tips on using font buttons
const fontTips = document.getElementById('font-tips'); // to enable show/hide
const headingButton = document.getElementsByClassName('heading-button'); //sets heading font
//const headingCaseButton = document.getElementsByClassName('heading-case-button'); //sets heading font
const smallHeadingButton = document.getElementsByClassName('small-heading-button'); // sets h5 and h6 heading font
const serifBodyFontButton = document.getElementsByClassName("serif-body-font-button"); // sets body font by cycling serif fonts alphabeticaly
const sansSerifBodyFontButton = document.getElementsByClassName("sans-serif-body-font-button"); // sets body font by cycling sans-serif fonts alphabetically
const fontWeightButton = document.getElementsByClassName('font-weight-button');
const resetFontButton = document.getElementsByClassName("reset-font-button"); //resets to default fonts

//Preselected colour arrays
//foxterrier.co.nz 'hsl(, %, %)', 'hsl(, %, %)', 'hsl(, %, %)', 'hsl(, %, %)', 'hsl(, %, %)',
const tamsamA = ['hsl(18, 65%, 6%)', 'hsl(17, 64%, 12%)', 'rgb(19, 12, 0)', 'hsl(24, 79%, 8%)', 'hsl(17, 65%, 8%)', 'hsl(24, 70%, 8%)', 'hsl(65, 32%, 3%)', 'hsl(194, 98%, 11%)', 'rgb(9, 58, 76)', 'hsl(206, 62%, 18%', 'hsl(210, 62%, 10%', 'hsl(235, 97%, 7%)'];
const tamsamB = ['hsl(20, 73%, 28%)', 'hsl(26, 86%, 30%)', 'rgb(69, 22, 3)', 'rgb(9, 58, 76)', 'hsl(193, 69%, 23%)', 'hsl(200, 45%, 34%)', 'hsl(206, 62%, 18%)', 'hsl(227, 18%, 36%)'];
const tamsamC = ['hsl(20, 57%, 45%)', 'hsl(26, 82%, 42%)', 'hsl(31, 90%, 40%)', 'hsl(187, 74%, 34%)', 'hsl(191, 49%, 47%)', 'hsl(195, 42%, 49%)', 'hsl(198, 53%, 45%)', 'hsl(204, 35%, 45%)'];
const tamsamD = ['hsl(33, 74%, 50%)', 'hsl(35, 76%, 50%)', 'hsl(37, 75%, 50%)', 'hsl(39, 75%, 50%)', 'hsl(31, 75%, 50%)', 'hsl(29, 75%, 50%)'];
const tamsamE = ['hsl(187, 35%, 50%)', 'hsl(187, 37%, 58%)', 'hsl(35, 68%, 56%)', 'hsl(37, 70%, 60%)', 'hsl(33, 72%, 59%)', 'hsl(38, 72%, 70%)', 'hsl(179, 28%, 60%)', 'hsl(195, 42%, 49%)', 'hsl(206, 37%, 60%)', 'hsl(212, 58%, 67%)', 'hsl(220, 12%, 60%)', 'hsl(191, 33%, 55%)'];
const tamsamF = ['hsl(184, 35%, 80%)', 'hsl(31, 62%, 82%)', 'hsl(34, 63%, 85%)', 'hsl(34, 71%, 85%)', 'hsl(183, 10%, 95%)', 'hsl(187, 16%, 92%)', 'hsl(210, 23%, 80%)', 'hsl(210, 33%, 80%)', '#80ceda'];

//const colourScheme = ['hsl(, %, %)', 'hsl(, %, %)', 'hsl(, %, %)', 'hsl(, %, %)', 'hsl(, %, %)', 'hsl(, %, %)'];
const colourScheme1 = ['rgb(19, 12, 0)', 'hsl(20, 73%, 28%)', 'hsl(20, 57%, 45%)', 'hsl(33, 74%, 50%)', 'hsl(187, 35%, 50%)', 'hsl(184, 35%, 80%)'];
const colourScheme2 = ['hsl(206, 62%, 18%)', 'hsl(20, 73%, 28%)', 'hsl(20, 57%, 45%)', 'hsl(35, 76%, 50%)', 'hsl(37, 70%, 60%)', 'hsl(34, 63%, 85%)'];
const colourScheme3 = ['hsl(194, 98%, 11%)', 'hsl(200, 45%, 34%)', 'hsl(20, 57%, 45%)', 'hsl(35, 76%, 50%)', 'hsl(195, 42%, 49%)', 'hsl(210, 23%, 80%)'];
const colourScheme4 = ['rgb(19, 12, 0)', 'hsl(193, 69%, 23%)', 'hsl(20, 57%, 45%)', 'hsl(37, 75%, 50%)', 'hsl(187, 35%, 50%)', 'hsl(184, 35%, 80%)'];
const colourScheme5 = ['hsl(210, 62%, 10%)', 'hsl(20, 73%, 28)', 'hsl(20, 57%, 45%)', 'hsl(39, 75%, 50%)', 'hsl(206, 37%, 60%)', 'hsl(210, 33%, 90%)'];
const colourScheme6 = ['hsl(210, 62%, 10%)', 'hsl(193, 69%, 23%)', 'hsl(20, 57%, 45%)', 'hsl(39, 75%, 50%)', 'hsl(187, 35%, 50%)', 'hsl(184, 35%, 80%)'];
const colourScheme7 = ['rgb(19, 12, 0)', 'hsl(20, 73%, 28%)', 'hsl(20, 57%, 45%)', 'hsl(31, 75%, 50%)', 'hsl(212, 58%, 67%)', 'hsl(210, 33%, 80%)'];
const colourScheme8 = ['hsl(235, 97%, 7%)', 'hsl(20, 73%, 28%)', 'hsl(20, 57%, 45%)', 'hsl(31, 75%, 50%)', 'hsl(212, 58%, 67%)', 'hsl(210, 33%, 80%)'];
const colourSchemesArray = [colourScheme1, colourScheme2, colourScheme3, colourScheme4, colourScheme5, colourScheme6, colourScheme7, colourScheme8];

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

const colourCodes = document.getElementsByClassName('colour-code'); //colour code below each circle
const colourCodesButton = document.getElementById('colour-codes-button'); //hides or shows colour codes
const coloursInfo = document.getElementById('colours-info'); //explanation of colours, initially display none
const colourInfoButton = document.getElementById('colour-info-button'); //button to shows hide explanation of colours
const fix = document.getElementById('fix-colour-samples-button'); //button to set fixed position on colour circles
const samples = document.getElementById('colours'); //the entire circles and codes section which will be fixed
const colourControls = document.getElementById('colour-controls'); //set of 4 buttons, moves down page when fixed
const squaresButton = document.getElementById('tiny-squares-button'); // to show or hide
const allSquares = document.getElementsByClassName('colour-squares'); // all sets of 6 tiny squares


//toggles show/hide buttons group
const toggleEditButtons = () => {
    toggleDisplayToFlex(editButtonsGroup);
    editButtonsGroup.style.display === 'flex' ? editButton.textContent = 'close' : editButton.textContent = 'edit header font';
    if (editButtonsGroup.style.display === 'none') {
        logoLeft.textContent = '';
        logoRight.textContent = '';
    } else {
        let repl = /"/g;
        logoLeft.textContent = title.style.fontFamily.replace(repl, '');
        logoRight.textContent = subtitle.style.fontFamily.replace(repl, '');
    }
}

editButton.addEventListener('click', toggleEditButtons);

//toggles show/hide buttons group
const toggleAllPageButtons = () => {
    toggleDisplayToFlex(allPageButtons);
    allPageButtons.style.display === 'flex' ? pageEditButton.textContent = 'close' : pageEditButton.textContent = 'more options';
}

pageEditButton.addEventListener('click', toggleAllPageButtons);

//toggles uppercase from the class list on and off (i.e. emoves and replaces class name)
// toggles title and subtitle  text to upper or lowercase using class name vs id to get footer logo etc
for (const item of caseButton) {
    item.addEventListener('click', function () {
        toggleClassNameList(titleClass, 'uppercase');
        toggleClassNameList(subtitleClass, 'uppercase');
    });
}

//selects randomly a font in the array and sets it to title and subtitles (id element and class list)
const createRandomLogo = (element, list, array) => {
    let logoFontFamily = array[random(array.length)];
    element.style.fontFamily = logoFontFamily;
    if (list.length > 0) {
        for (const item of list) {
            item.style.fontFamily = logoFontFamily;
        }
    }
}

//creates random logo fonts and updates random logo button text with both font names
const activateLogoButton = () => {
    createRandomLogo(title, titleClass, headingFontsArray);
    createRandomLogo(subtitle, subtitleClass, sansSerifFontsArray);
    buttonLabel = `${title.style.fontFamily} + ${subtitle.style.fontFamily}`;
    let repl = /"/g;
    buttonLabel = buttonLabel.replace(repl, '');
    for (const item of randomLogoButton) {
        item.textContent = buttonLabel;
    }
    logoLeft.style.fontFamily = title.style.fontFamily;
    logoLeft.textContent = title.style.fontFamily.replace(repl, '');
    logoRight.style.fontFamily = subtitle.style.fontFamily;
    logoRight.textContent = subtitle.style.fontFamily.replace(repl, '');
}

for (const item of randomLogoButton) {
    item.addEventListener('click', activateLogoButton);
}

//cycles through a selected font array, sets a font on logo aside (element) and logo and button (lists) and resets the array for the next click
const cycleFonts = (element, list1, list2, array) => {
    let repl = /"/g;
    element.style.fontFamily = array[0] //logoLeft/logoRight and allFontsArray
    element.textContent = array[0].replace(repl, '');
    for (const item of list1) { // (sub)titleClass
        item.style.fontFamily = array[0];
    }
    for (const item of list2) { //logo(sub)TitleButton
        item.textContent = array[0].replace(repl, '');
    }
    array.push(array[0]);
    array.shift(array[0]);
    for (const item of randomLogoButton) {
        item.textContent = 'random logo font';
    }
}

// selects title font, updates title button text with font name
for (const item of logoTitleButton) {
    item.addEventListener('click', () => {
        cycleFonts(logoLeft, titleClass, logoTitleButton, allFontsArray);
    });
}

// selects subtitle font, updates button text with font name
for (const item of logoSubTitleButton) {
    item.addEventListener('click', () => {
        cycleFonts(logoRight, subtitleClass, logoSubTitleButton, allFontsArray);
    });
}

//Fonts

fontTipsButton.addEventListener('click', function () { //display or hide font tips
    toggleDisplay(fontTips);
    fontTipsButton.parentElement.style.marginBottom = '1rem';
})

const toggleFontWeight = list => { // toggle body font 300/400
    body[0].style.fontWeight === '300' ? body[0].style.fontWeight = '400' : body[0].style.fontWeight = '300';
    for (const item of fontWeightButton) {
        body[0].style.fontWeight === '300' ? item.textContent = 'font-weight: 300' : item.textContent = 'font-weight: 400';
    }
    for (const item of list) {
        item.style.fontWeight = '400';
    }
}

for (const item of fontWeightButton) {
    item.addEventListener('click', function () { //toggles body font, headings is required to reset back to normal font weight
        toggleFontWeight(headings);
    });
}

const cycleFontsOnList = (list, array) => { //selects font and updates array ready for next click
    if (list.length > 0) {
        for (const item of list) {
            item.style.fontFamily = array[0];
        }
        array.push(array[0]);
        array.shift(array[0]);
    }
}

const setHeadings = () => {
    let repl = /"/g;
    let buttonLabel = headingFontsArray[0].replace(repl, '');
    for (const item of headingButton) {
    item.textContent = buttonLabel;
    }
    for (const item of smallHeadingButton) {
    item.textContent = 'small heading';
    }
    for (const item of randomLogoButton) {
    item.textContent = buttonLabel;
    }
    cyclePropertyOnList(headings, headingFontsArray, 'fontFamily'); //function in script.js
} // if cycled first then font would be array.length minus one


for (const item of headingButton) {
    item.addEventListener('click', function () { //cycles through heading fonts and updates button text, will update logo font also
        setHeadings();
    });
}
/*
const toggleUppercaseHeading = list => { // toggle body font 300/400
    for (i = 0; i < list.length; i++) {
        if (list[i].style.textTransform === '') {
            list[i].style.textTransform = window.getComputedStyle(list[i]).getPropertyValue('text-transform');
        }
    list[i].style.textTransform === 'none' ? list[i].style.textTransform = 'uppercase' : list[i].style.textTransform = 'none';
     if (list[i].style.textTransform === 'uppercase') {
        list[i].style.letterSpacing = '0.2rem';
}
}
}

for (const item of headingCaseButton) {
item.addEventListener('click', function(){
    toggleUppercaseHeading(headings);
});
}
*/
const setSmallHeadingsOnList = list => { //toggles between heading and body font and updates text of small heading button
    const bodyFontFamily = window.getComputedStyle(body[0]).getPropertyValue('font-family');
    const headingFontFamily = window.getComputedStyle(headings[0]).getPropertyValue('font-family');
    for (const item of list) { //lists are h5/h6 headings tag and class lists
        item.style.textTransform = 'none';
        item.style.letterSpacing = '';
        item.style.fontFamily === bodyFontFamily ?  item.style.fontFamily = headingFontFamily : item.style.fontFamily = bodyFontFamily;
    }
}

const setSerifBodyFont = () => {
    let repl = /"/g;
    for (const item of serifBodyFontButton) {
        item.textContent = serifFontsArray[0].replace(repl, '');
    }
    cycleFontsOnList(body, serifFontsArray);
     // if cycled first then font would be array.length minus one
    for (const item of sansSerifBodyFontButton) {
        item.textContent = 'sans-serif body'; // because this has been disturbed
    }
    for (const item of smallHeadingButton) {
        item.textContent = 'small heading'; // because this needs to be reset (a choice made)
    }
}

for (const item of serifBodyFontButton) {
    item.addEventListener('click', function () { //updates content and button text content to chosen serif font
        setSerifBodyFont();
    });
}

const setSansSerifBodyFont = () => {
    let repl = /"/g;
    for (const item of sansSerifBodyFontButton) {
        item.textContent = sansSerifFontsArray[0].replace(repl, '');
    }
    cycleFontsOnList(body, sansSerifFontsArray);
     // if cycled first then font would be array.length minus one
    for (const item of serifBodyFontButton) { // because this has been disturbed
        item.textContent = 'serif body';
    }
    for (const item of smallHeadingButton) {
       item.textContent = 'small heading'; // because this needs to be reset (a choice made)
    }
}

for (const item of sansSerifBodyFontButton) {
    item.addEventListener('click', function () { // updates content and button text content to chosen sans-serif font
        setSansSerifBodyFont();
    });
}

const setAllH5H6Headings = () => {
    setSmallHeadingsOnList(h5headings);
    setSmallHeadingsOnList(h6headings);
    setSmallHeadingsOnList(h5ClassHeadings);
    setSmallHeadingsOnList(h6ClassHeadings);
    const smallHeadingFontFamily = window.getComputedStyle(h5headings[0]).getPropertyValue('font-family'); // requires h5 heading to be present
    let repl = /"/g;
    for (const item of smallHeadingButton) {
        item.textContent = smallHeadingFontFamily.replace(repl, '');
    }
}

for (const item of smallHeadingButton) {
    item.addEventListener('click', function () { //updates content and buttons text to reflect small heading setting
        setAllH5H6Headings();
    });
}
/*
const changeFontsOnList = (list, newFont) => { //toggle a preselected new font
    for (const item of list) {
        item.style.fontFamily !== newFont ? item.style.fontFamily = newFont : item.style.fontFamily = '';
    }
}*/

const resetFontList = (font, list) => { // set to a preselected font (no toggle)
    for (const item of list) {
        item.style.fontFamily = font;
    }
}

const fullResetFonts = () => { // sets fonts all back to Raleway and sets buttons back to initial text
    resetFontList('Raleway', headings);
    resetFontList('Raleway', h5headings);
    resetFontList('Raleway', h6headings);
    resetFontList('Raleway', h5ClassHeadings);
    resetFontList('Raleway', h6ClassHeadings);
    document.body.style.fontFamily = "Raleway";
    for (const item of headingButton) {
        item.textContent = 'heading';
    }
    for (const item of smallHeadingButton) {
        item.textContent = ' small heading';
    }
    for (const item of sansSerifBodyFontButton) {
        item.textContent = 'sans-serif';
    }
    for (const item of serifBodyFontButton) {
        item.textContent = 'serif';
    }
    for (const item of randomLogoButton) {
        item.textContent = 'random logo font';
    }
}

for (const item of resetFontButton) {
    item.addEventListener('click', function () {
        fullResetFonts();
    });
}

//COLOURS

const createHSLNumbers = num => { //creates a HSl code with num to control lightness
    num1 = random(361);
    num2 = random(101);
    num3 = random(25) + num;
}

const changeColour = (element, list1, list2, variable, num) => { //sets the circle colours
    createHSLNumbers(num);
    variable = `hsl(${num1}, ${num2}%, ${num3}%)`;
    element.style.backgroundColor = variable;
    element.nextSibling.nextSibling.textContent = variable;
    for (const item of list1) {
        item.style.backgroundColor = variable;
    }
    for (const item of list2) {
        item.style.color = variable;
    }
}

const changePreSelectedColour = (element, list1, list2, array, variable) => { //sets circle colours from preconfigured arrays
    variable = array[0];
    array.push(array[0]);
    array.shift(array[0]);
    element.style.backgroundColor = variable;
    element.nextSibling.nextSibling.textContent = variable; //white space
    for (const item of list1) {
        item.style.backgroundColor = variable;
    }
    for (const item of list2) {
        item.style.color = variable;
    }
}

const changeToneInColourScheme = (array, element, list1, list2, arrayPosition) => {
    element.style.backgroundColor = array[arrayPosition];
    element.nextSibling.nextSibling.textContent = array[arrayPosition]; // white space
    for (const item of list1) {
        item.style.backgroundColor = array[arrayPosition];
    }
    for (const item of list2) {
        item.style.color = array[arrayPosition];
    }
}

const changeColourScheme = array => {
    changeToneInColourScheme(array[0], a, darkTones1, darkTones1Text, 0);
    changeToneInColourScheme(array[0], b, darkTones2, darkTones2Text, 1);
    changeToneInColourScheme(array[0], c, midTones1, midTones1Text, 2);
    changeToneInColourScheme(array[0], d, midTones2, midTones2Text, 3);
    changeToneInColourScheme(array[0], e, midTones3, midTones3Text, 4);
    changeToneInColourScheme(array[0], f, lightTones1, lightTones1Text, 5);
       for (const item of favouritesButton) {
        if (array[0] === colourScheme1) {
           item.textContent = 'colour scheme 1';
       } else if (array[0] === colourScheme2) {
            item.textContent = 'colour scheme 2';
        } else if (array[0] === colourScheme3) {
            item.textContent = 'colour scheme 3';
        } else if (array[0] === colourScheme4) {
            item.textContent = 'colour scheme 4';
        } else if (array[0] === colourScheme5) {
            item.textContent = 'colour scheme 5';
        } else if (array[0] === colourScheme6) {
            item.textContent = 'colour scheme 6';
        } else if (array[0] === colourScheme7) {
            item.textContent = 'colour scheme 7';
        } else if (array[0] === colourScheme8) {
            item.textContent = 'colour scheme 8';
        }
     }
    array.push(array[0]);
    array.shift(array[0]);
}

for (const item of favouritesButton) {
    item.addEventListener('click', function () {
        changeColourScheme(colourSchemesArray);
    });
}

a.addEventListener('click', function () { //change the colours of the circles
    changeColour(a, darkTones1, darkTones1Text, newColourA, 0);
});

aCode.addEventListener('click', function () { //change the colours of the circles to preselected
    changePreSelectedColour(a, darkTones1, darkTones1Text, tamsamA, newColourA)
});

b.addEventListener('click', function () {
    changeColour(b, darkTones2, darkTones2Text, newColourB, 10);
});

bCode.addEventListener('click', function () {
    changePreSelectedColour(b, darkTones2, darkTones2Text, tamsamB, newColourB)
});

c.addEventListener('click', function () {
    changeColour(c, midTones1, midTones1Text, newColourC, 25)
});

cCode.addEventListener('click', function () {
    changePreSelectedColour(c, midTones1, midTones1Text, tamsamC, newColourC)
});

d.addEventListener('click', function () {
    changeColour(d, midTones2, midTones2Text, newColourD, 40)
});

dCode.addEventListener('click', function () {
    changePreSelectedColour(d, midTones2, midTones2Text, tamsamD, newColourD)
});

e.addEventListener('click', function () {
    changeColour(e, midTones3, midTones3Text, newColourE, 55)
});

eCode.addEventListener('click', function () {
    changePreSelectedColour(e, midTones3, midTones3Text, tamsamE, newColourE)
});

f.addEventListener('click', function () {
    changeColour(f, lightTones1, lightTones1Text, newColourF, 70)
});

fCode.addEventListener('click', function () {
    changePreSelectedColour(f, lightTones1, lightTones1Text, tamsamF, newColourF)
});

const cycleTextColour = element => { //cycles text colour through current circle colours
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
    } else if (element.classList.contains('text-white')) {
        element.classList.replace('text-white', 'text-black');
        element.style.color = '#000';
    } else {
        element.classList.add('text-dark-1')
        element.style.color = a.style.backgroundColor;
    }
}

const cycleTextColourList = list => { //cycles text colour through current circle colours
    for (const item of list) {
        if (item.classList.contains('text-dark-1')) {
            item.classList.replace('text-dark-1', 'text-dark-2');
            item.style.color = b.style.backgroundColor;
        } else if (item.classList.contains('text-dark-2')) {
            item.classList.replace('text-dark-2', 'text-mid-1')
            item.style.color = c.style.backgroundColor;
        } else if (item.classList.contains('text-mid-1')) {
            item.classList.replace('text-mid-1', 'text-mid-2')
            item.style.color = d.style.backgroundColor;
        } else if (item.classList.contains('text-mid-2')) {
            item.classList.replace('text-mid-2', 'text-mid-3')
            item.style.color = e.style.backgroundColor;
        } else if (item.classList.contains('text-mid-3')) {
            item.classList.replace('text-mid-3', 'text-light-1')
            item.style.color = f.style.backgroundColor;
        } else if (item.classList.contains('text-light-1')) {
            item.classList.replace('text-light-1', 'white')
            item.style.color = '#fff';
        } else if (item.classList.contains('text-white')) {
            item.classList.replace('text-white', 'text-black');
            item.style.color = '#000';
        } else {
            item.classList.add('text-dark-1')
            item.style.color = a.style.backgroundColor;
        }
    }
}

for (const item of colourHeadingsButton) {
    item.addEventListener('click', function () {
        cycleTextColourList(headingToColour);
    });
}

const changeBackgroundColour = element => { //cycles through background colours
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

const changeBackgroundColourList = list => { //cycles through background colours
    for (const item of list) {
        if (item.classList.contains('dark-1')) {
            item.classList.replace('dark-1', 'dark-2')
            item.style.backgroundColor = b.style.backgroundColor;
        } else if (item.classList.contains('dark-2')) {
            item.classList.replace('dark-2', 'mid-1')
            item.style.backgroundColor = c.style.backgroundColor;
        } else if (item.classList.contains('mid-1')) {
            item.classList.replace('mid-1', 'mid-2')
            item.style.backgroundColor = d.style.backgroundColor;
        } else if (item.classList.contains('mid-2')) {
            item.classList.replace('mid-2', 'mid-3')
            item.style.backgroundColor = e.style.backgroundColor;
        } else if (item.classList.contains('mid-3')) {
            item.classList.replace('mid-3', 'light-1')
            item.style.backgroundColor = f.style.backgroundColor;
        } else if (item.classList.contains('light-1')) {
            item.classList.replace('light-1', 'bg-white')
            item.style.backgroundColor = '#fff';
        } else {
            item.classList.add('dark-1')
            item.style.backgroundColor = a.style.backgroundColor;
        }
    }
}

for (const item of colourBackgroundButton) {
    item.addEventListener('click', function () {
        myArray = [homeHeader, tamsamHeader, title, subtitle, subtitleHome, tamsamHeaderLogo,]
        myArray.forEach(item => changeBackgroundColour(item));
        headerButtonsContainer.style.backgroundColor = '#fff';
    });
}

const createHSLRange = (num, rangeStart, rangeEnd) => { //creates (only) numbers for HSL within hue range and lightness range
    num1 = random(361); //hue
    while (num1 < rangeStart || num1 > rangeEnd) { // select just blues etc
        num1 = random(361);
    }
    num2 = random(101); //saturation
    num3 = random(25) + num; //lightness
}

const changeColourRange = (element, list1, list2, variable, num, rangeStart, rangeEnd) => { // changes circle colour and names colour code
    createHSLRange(num, rangeStart, rangeEnd);
    variable = `hsl(${num1}, ${num2}%, ${num3}%)`;
    element.style.backgroundColor = variable;
    element.nextSibling.nextSibling.textContent = variable; //white space node
    for (const item of list1) {
        item.style.backgroundColor = variable;
    }
    for (const item of list2) {
        item.style.color = variable;
    }
}

square1.addEventListener('click', function () {
    changeColourRange(a, darkTones1, darkTones1Text, newColourA, 0, 0, 90)
});

square2.addEventListener('click', function () {
    changeColourRange(a, darkTones1, darkTones1Text, newColourA, 0, 90, 150)
});

square3.addEventListener('click', function () {
    changeColourRange(a, darkTones1, darkTones1Text, newColourA, 0, 150, 210)
});

square4.addEventListener('click', function () {
    changeColourRange(a, darkTones1, darkTones1Text, newColourA, 0, 210, 255)
});

square5.addEventListener('click', function () {
    changeColourRange(a, darkTones1, darkTones1Text, newColourA, 0, 255, 300)
});

square6.addEventListener('click', function () {
    changeColourRange(a, darkTones1, darkTones1Text, newColourB, 0, 300, 360)
});

square7.addEventListener('click', function () {
    changeColourRange(b, darkTones2, darkTones2Text, newColourB, 10, 0, 90)
});

square8.addEventListener('click', function () {
    changeColourRange(b, darkTones2, darkTones2Text, newColourB, 10, 90, 150)
});

square9.addEventListener('click', function () {
    changeColourRange(b, darkTones2, darkTones2Text, newColourB, 10, 150, 210)
});

square10.addEventListener('click', function () {
    changeColourRange(b, darkTones2, darkTones2Text, newColourB, 10, 210, 255)
});

square11.addEventListener('click', function () {
    changeColourRange(b, darkTones2, darkTones2Text, newColourB, 10, 255, 300)
});

square12.addEventListener('click', function () {
    changeColourRange(b, darkTones2, darkTones2Text, newColourB, 10, 300, 360)
});

square13.addEventListener('click', function () {
    changeColourRange(c, midTones1, midTones1Text, newColourC, 25, 0, 90)
});

square14.addEventListener('click', function () {
    changeColourRange(c, midTones1, midTones1Text, newColourC, 25, 90, 150)
});

square15.addEventListener('click', function () {
    changeColourRange(c, midTones1, midTones1Text, newColourC, 25, 150, 210)
});

square16.addEventListener('click', function () {
    changeColourRange(c, midTones1, midTones1Text, newColourC, 25, 210, 255)
});

square17.addEventListener('click', function () {
    changeColourRange(c, midTones1, midTones1Text, newColourC, 25, 255, 300)
});

square18.addEventListener('click', function () {
    changeColourRange(c, midTones1, midTones1Text, newColourC, 25, 300, 360)
});

square19.addEventListener('click', function () {
    changeColourRange(d, midTones2, midTones2Text, newColourD, 40, 0, 90)
});

square20.addEventListener('click', function () {
    changeColourRange(d, midTones2, midTones2Text, newColourD, 40, 90, 150)
});

square21.addEventListener('click', function () {
    changeColourRange(d, midTones2, midTones2Text, newColourD, 40, 150, 210)
});

square22.addEventListener('click', function () {
    changeColourRange(d, midTones2, midTones2Text, newColourD, 40, 210, 255)
});

square23.addEventListener('click', function () {
    changeColourRange(d, midTones2, midTones2Text, newColourD, 40, 255, 300)
});

square24.addEventListener('click', function () {
    changeColourRange(d, midTones2, midTones2Text, newColourD, 40, 300, 360)
});
square25.addEventListener('click', function () {
    changeColourRange(e, midTones3, midTones3Text, newColourE, 55, 0, 90)
});

square26.addEventListener('click', function () {
    changeColourRange(e, midTones3, midTones3Text, newColourE, 55, 90, 150)
});

square27.addEventListener('click', function () {
    changeColourRange(e, midTones3, midTones3Text, newColourE, 55, 150, 210)
});

square28.addEventListener('click', function () {
    changeColourRange(e, midTones3, midTones3Text, newColourE, 55, 210, 255)
});

square29.addEventListener('click', function () {
    changeColourRange(e, midTones3, midTones3Text, newColourE, 55, 255, 300)
});

square30.addEventListener('click', function () {
    changeColourRange(e, midTones3, midTones3Text, newColourE, 55, 300, 360)
});
square31.addEventListener('click', function () {
    changeColourRange(f, lightTones1, lightTones1Text, newColourF, 70, 0, 90)
});

square32.addEventListener('click', function () {
    changeColourRange(f, lightTones1, lightTones1Text, newColourF, 70, 90, 150)
});

square33.addEventListener('click', function () {
    changeColourRange(f, lightTones1, lightTones1Text, newColourF, 70, 150, 210)
});

square34.addEventListener('click', function () {
    changeColourRange(f, lightTones1, lightTones1Text, newColourF, 70, 210, 255)
});

square35.addEventListener('click', function () {
    changeColourRange(f, lightTones1, lightTones1Text, newColourF, 70, 255, 300)
});

square36.addEventListener('click', function () {
    changeColourRange(f, lightTones1, lightTones1Text, newColourF, 70, 300, 360)
});

colourCodesButton.addEventListener('click', function () { //toggles show or hide colour codes 
    toggleDisplayList(colourCodes);
});

const fixColourSamples = () => {
    coloursInfo.style.display ='none';
    if (window.getComputedStyle(samples).getPropertyValue('position') !== 'fixed') {
        samples.style.position = 'fixed';
        colourControls.style.top = '-40px';
        toggleDisplayToGrid(tamsamHeader);
        toggleDisplayToFlex(subHeaderButtons);
        /*toggleDisplayToInlineBlock(logoControlsButton);*/
    } else {
        samples.style.position = '';
        samples.style.marginTop = '';
        colourControls.style.top = '';
        toggleDisplayToGrid(tamsamHeader);
        toggleDisplayToFlex(subHeaderButtons);
        /*toggleDisplayToInlineBlock(logoControlsButton);*/
    }
}

const hideColouredSquares = () => {
    for (const item of allSquares) {
        toggleDisplayToFlex(item);
    }
}

colourInfoButton.addEventListener('click', function () { //shows hide colour explanation block
    toggleDisplay(coloursInfo)
});

squaresButton.addEventListener('click', hideColouredSquares); //show hides tiny coloured squares
fix.addEventListener('click', fixColourSamples); // fixes circles in place

const navButton = document.getElementById('show-nav-layout'); //assesses additional block
const navContent = document.getElementById('nav-layout-content'); //additional block

navButton.addEventListener('click', function (event) { //initially display none
    toggleDisplayToGrid(navContent);
    event.target.style.marginBottom = '3rem';
});

const resetSectionButton = document.getElementById('show-reset'); //button to show hide reset content block
const resetContent = document.getElementById('reset-content'); //reset content block initially display block

resetSectionButton.addEventListener('click', function () {
    toggleDisplay(resetContent);
    if (resetContent.style.display === 'block') { // hides the other tab content when shown
        shortcutsContent.style.display = 'none';
        mediaContent.style.display = 'none';
    }
});

const mediaButton = document.getElementById('show-media-queries'); //button to show hide media content block
const mediaContent = document.getElementById('media-content') //media content block, initially display none

mediaButton.addEventListener('click', function () {
    toggleDisplay(mediaContent);
    if (mediaContent.style.display === 'block') { // hides the other tab content when shown
        resetContent.style.display = 'none';
        shortcutsContent.style.display = 'none';
    }
});

const shortcutButton = document.getElementById('show-shortcuts'); //button to show hide shortcutscontent block
const shortcutsContent = document.getElementById('shortcuts-content') //shortcuts content block, initially display none

shortcutButton.addEventListener('click', function () {
    toggleDisplay(shortcutsContent);
    if (shortcutsContent.style.display === 'block') { // hides the other tab content when shown
        resetContent.style.display = 'none';
        mediaContent.style.display = 'none';
    }
});

const mobileButton = document.getElementById('show-mobile'); // button to show additional mobile nav content
const mobileContent = document.getElementById('more-mobile-content') //additional mobile nav content

mobileButton.addEventListener('click', function (event) {
    toggleDisplayToGrid(mobileContent);
    event.target.style.marginBottom = '3rem';
});