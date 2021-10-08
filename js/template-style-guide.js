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

const bodyFont = document.getElementById('body-font');
const buttons = document.getElementsByTagName('button');
const headings = document.getElementsByClassName('heading');
const h5headings = document.getElementsByTagName('h5');
const h6headings = document.getElementsByTagName('h6');
const h5ClassHeadings = document.getElementsByClassName('h5');
const h6ClassHeadings = document.getElementsByClassName('h6');
const headingButton = document.getElementById('heading-button');
const smallHeadingButton = document.getElementById('small-heading-button');
const bodyFontButton = document.getElementById("body-font-button");
const serifBodyFontButton = document.getElementById("serif-body-font-button");
const sansSerifBodyFontButton = document.getElementById("sans-serif-body-font-button");
const resetButton = document.getElementById("reset-button");
const headingFontsArray = ['"Roboto Slab"', 'Noto Serif', 'Bitter', '"Rozha One"', 'Lora', 'Prata', 'Forum', '"Nixie One"', 'Merriweather', '"Cormorant Garamond"', 'Mulish', '"Libre Franklin"', 'Noto Sans Display', 'Raleway', 'Quicksand', '"Nothing You Could Do"', '"Permanent Marker"'];
const bodyFontsArray = ['Antic', 'Bitter', 'Cabin', 'Cairo', '"Cormorant Garamond"', 'Dosis', '"Fira Sans"', '"Hind Siliguri"', 'Inter', 'Lato', '"Libre Franklin"', 'Lora', 'Merriweather', 'Montserrat', 'Mulish', '"Nixie One"', 'Noto Sans', 'Noto Serif', 'Nunito', '"Nunito Sans"', '"Open Sans"', 'Oxygen', 'Poppins', 'Prata', 'PT Sans', 'Raleway', 'Roboto', '"Roboto Slab"', 'Rubik', 'Source Sans Pro', 'Quicksand', '"Work Sans"'];
const serifFontsArray = ['Bitter', '"Cormorant Garamond"', 'Forum', 'Lora', 'Merriweather', '"Nixie One"', '"Noto Serif"', 'Prata', '"Roboto Slab"'];
const sansSerifFontsArray = ['Antic', 'Cabin', 'Cairo', 'Dosis', '"Fira Sans"', '"Hind Siliguri"', 'Inter', 'Lato', '"Libre Franklin"', 'Montserrat', 'Mulish', '"Noto Sans"', 'Nunito', '"Nunito Sans"', '"Open Sans"', 'Oxygen', 'Poppins', 'PT Sans', 'Raleway', 'Roboto', 'Rubik', 'Source Sans Pro', 'Quicksand', '"Work Sans"'];

const tryHeadingFonts = list => {
    for (const item of list) {
        item.style.fontFamily = headingFontsArray[0];
    }
    headingFontsArray.push(headingFontsArray[0]);
    headingFontsArray.shift(headingFontsArray[0]);
}

const setSmallHeadings = list => {
    const bodyFontFamily = window.getComputedStyle(bodyFont).getPropertyValue('font-family')
    const headingFontFamily = window.getComputedStyle(headings[0]).getPropertyValue('font-family')
    for (const item of list) {
        let repl = /"/g;
        if (item.style.fontFamily === bodyFontFamily) {
            item.style.fontFamily = headingFontFamily;
            smallHeadingButton.textContent = headingFontFamily.replace(repl, '');

        } else {
            item.style.fontFamily = bodyFontFamily;
            smallHeadingButton.textContent = bodyFontFamily.replace(repl, '')
        }
    }
}

const tryFonts = array => {
    document.body.style.fontFamily = array[0];
    for (const item of buttons) {
        item.style.fontFamily = array[0];
    }
    array.push(array[0]);
    array.shift(array[0]);
}

const resetFont = (font, list) => {
    for (const item of list) {
        item.style.fontFamily = font;
    }
}
const fullResetFonts = () => {
    resetFont('Raleway', headings);
    resetFont('Raleway', h5headings);
    resetFont('Raleway', h6headings);
    resetFont('Raleway', h5ClassHeadings);
    resetFont('Raleway', h6ClassHeadings);
    document.body.style.fontFamily = "Raleway"
    headingButton.textContent = 'heading';
    smallHeadingButton.textContent = 'small heading';
    sansSerifBodyFontButton.textContent = 'sans-serif';
    serifBodyFontButton.textContent = 'serif';
}

headingButton.addEventListener('click', function () {
    let repl = /"/g;
    headingButton.textContent = headingFontsArray[0].replace(repl, '');
    smallHeadingButton.textContent = 'small heading';
    tryHeadingFonts(headings)
});
smallHeadingButton.addEventListener('click', function () {
    setSmallHeadings(h5headings);
    setSmallHeadings(h6headings);
    setSmallHeadings(h5ClassHeadings);
    setSmallHeadings(h6ClassHeadings);
});
serifBodyFontButton.addEventListener('click', function () {
    let repl = /"/g;
    serifBodyFontButton.textContent = serifFontsArray[0].replace(repl,'');
    tryFonts(serifFontsArray);
    sansSerifBodyFontButton.textContent = 'sans-serif';
    smallHeadingButton.textContent = 'small heading'
});
sansSerifBodyFontButton.addEventListener('click', function () {
    let repl = /"/g;
    sansSerifBodyFontButton.textContent = sansSerifFontsArray[0].replace(repl, '');
    tryFonts(sansSerifFontsArray);
    serifBodyFontButton.textContent = 'serif';
    smallHeadingButton.textContent = 'small heading'
});
resetButton.addEventListener('click', function () {
    fullResetFonts()
})


//COLOURS

//Preselected colour arrays
//foxterrier.co.nz

const tamsamA = ['hsl(12, 94% 12%)', 'hsl(21, 65%, 18%)', 'hsl(64, 60%, 3%)', 'hsl(96, 57%, 1%)' , 'hsl(130, 85%, 1%)', 'hsl(186, 88%, 16%)', 'hsl(194, 98%, 11%)', 'hsl(233, 7%, 0%)' , 'hsl(245, 3%, 5%)', 'hsl(246, 0%, 3%)', 'hsl(253, 13%, 4%)', 'hsl(357, 73%, 18%)', 'rgb(19, 12, 0)', 'rgb(9, 58, 76)'];
const tamsamB =['hsl(4, 28%, 20%)', 'hsl(5, 69%, 22%)', 'hsl(15, 99%, 23%)', 'hsl(18, 50%, 26%)', 'hsl(18, 79%, 26%)', 'hsl(20, 73%, 28%)', 'hsl(23, 60%, 33%)', 'hsl(24, 79%, 15%)', 'hsl(26, 86%, 30%)', 'hsl(189, 16%, 12%)', 'hsl(192, 48%, 19%)', 'hsl(359, 29%, 23%)', 'rgb(69, 22, 3)', 'rgb(9, 58, 76)', '#02444e'];
const tamsamC =['hsl(21, 45%, 44%)', 'hsl(22, 48%, 47%)', 'hsl(28, 58%, 46%)', 'hsl(31, 90%, 40%)', 'hsl(32, 76%, 47%)', 'hsl(32, 68%, 36%)', 'hsl(33, 73%, 46%)', 'hsl(34, 80%, 33%)', 'hsl(36, 89%, 40%)', 'hsl(44, 89%, 40%)', 'hsl(87, 74%, 34%)', 'hsl(191, 75%, 31%)', 'hsl(196, 39%, 40%)', 'hsl(204, 35%, 45%)', 'hsl(227, 18%, 36%)', 'hsl(263, 7%, 45%)', 'hsl(300, 26%, 33%)',  '#ef5406', 'rgb(69, 22, 3)', 'rgb(4, 122, 140)'];
const tamsamD =['hsl(15, 69%, 40%)', 'hsl(15, 70%, 62%)', 'hsl(19, 46%, 57%)', 'hsl(21, 71%, 51%)', 'hsl(21, 31%, 41%)', 'hsl(33, 74%, 50%)', 'hsl(35, 76%, 50%)', 'hsl(36, 83%, 63%)', 'hsl(40, 75%, 51%)', 'hsl(42, 52%, 53%)', 'hsl(186, 41%, 60%)', 'hsl(187, 72%, 46%)', 'hsl(190, 54%, 62%)', 'hsl(190, 68%, 40%)', 'hsl(203, 25%, 54%)', 'hsl(206, 22%, 50%)', 'hsl(238,5%, 52%)', 'hsl(296, 21%, 56%', 'hsl(329, 28%, 40%)', '#ef5406', 'rgb(219, 112, 17)', 'rgb(199, 140, 28)', '#80ceda'];
const tamsamE =['hsl(24, 50%, 75%)', 'hsl(26, 58%, 57%)', 'hsl(26, 64%, 56%)', 'hsl(28, 69%, 58%)', 'hsl(33, 62%, 55%)', 'hsl(34, 71%, 72%)', 'hsl(38. 90%, 65%)', 'hsl(42, 69%, 79%)', 'hsl(194, 29%, 64%)', 'hsl(199, 17%, 72%)', 'hsl(201, 27%, 61%)', 'hsl(210, 23%, 76%)', 'hsl(214, 14%, 72%)', 'hsl(217, 16%, 59%)', 'hsl(283, 1%, 66%)', 'hsl(3110, 4%, 66%)', 'hsl(318, 20%, 65%)', 'rgb(219, 112, 17)', 'rgb(199, 140, 28)', '#80ceda'];
const tamsamF =['hsl(20, 29%, 94%)', 'hsl(21, 1%, 73%)', 'hsl(28, 65, 94%)', 'hsl(34, 21%, 94%)', 'hsl(41, 76%, 74%)', 'hsl(43, 57%, 93%)', 'hsl(49, 47%, 94%)', 'hsl(52, 69%, 87%)', 'hsl(80%, 3%, 94%)', 'hsl(182, 10%, 84%)', 'hsl(183, 10%, 90%)', 'hsl(187, 16%, 86%)',  'hsl(245, 4%, 78%)', 'hsl(259, 5%, 85%)', 'hsl(285, 1%, 93%)',  'hsl(293, 24%, 80%)', 'hsl(310%, 49%, 42%)', 'hsl(318, 48%, 86%)', 'hsl(332, 15%, 81%)', 'hsl(357, 7%, 72%)'];

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

const changePreSelectedColour = (element, list, array, variable) => {
    variable = array[0];
    array.push(array[0]);
    array.shift(array[0]);
    element.style.backgroundColor = variable;
    element.nextSibling.nextSibling.textContent = variable;
    for (const item of list) {
        item.style.backgroundColor = variable;
    }
}

a.addEventListener('click', function () {
    changeColour(a, darkTones1, newColourA, 0)
});

a.addEventListener('dblclick', function () {
    changePreSelectedColour(a, darkTones1, tamsamA, newColourA)
});

b.addEventListener('click', function () {
    changeColour(b, darkTones2, newColourB, 10)
});

b.addEventListener('dblclick', function () {
    changePreSelectedColour(b, darkTones2, tamsamB, newColourB)
});

c.addEventListener('click', function () {
    changeColour(c, midTones1, newColourC, 25)
});

c.addEventListener('dblclick', function () {
    changePreSelectedColour(c, midTones1, tamsamC, newColourC)
});

d.addEventListener('click', function () {
    changeColour(d, midTones2, newColourD, 40)
});

d.addEventListener('dblclick', function () {
    changePreSelectedColour(d, midTones2, tamsamD, newColourD)
});

e.addEventListener('click', function () {
    changeColour(e, midTones3, newColourE, 55)
});

e.addEventListener('dblclick', function () {
    changePreSelectedColour(e, midTones3, tamsamE, newColourE)
});

f.addEventListener('click', function () {
    changeColour(f, lightTones1, newColourF, 70)
});

f.addEventListener('dblclick', function () {
    changePreSelectedColour(f, lightTones1, tamsamF, newColourF)
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

const coloursInfo = document.getElementById('colours-info');
const colourTips = document.getElementById('colour-info-button');
const fix = document.getElementById('fix-colour-samples-button');
const samples = document.getElementById('colours');
const colourControls = document.getElementById('colour-controls');
const squaresButton = document.getElementById('tiny-squares-button');
const allSquares = document.getElementsByClassName('colour-squares');
const header = document.getElementsByTagName('header');

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

colourTips.addEventListener('click', function () {
    toggleDisplay(coloursInfo)
});

squaresButton.addEventListener('click', hideColouredSquares);
fix.addEventListener('click', fixColourSamples);



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

