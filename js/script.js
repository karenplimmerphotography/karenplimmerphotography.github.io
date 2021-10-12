const mySideNav = document.getElementById("mySideNav");
const open = document.getElementById("mobile-menu-open");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

function openCloseNav() {
  if (mySideNav.style.width === '250px') {
    mySideNav.style.width = "0";
    line1.style.display = '';
    line1.style.transform = ''
    line2.style.opacity = '1';
    line1.style.bottom = "";
    line1.style.right = "";
    line3.style.display = '';
    line3.style.transform = '';
    line3.style.top = '';
    line3.style.right = '';
  } else {
    mySideNav.style.width = "250px";
    mySideNav.style.opacity = "1";
    line1.style.display = 'block';
    line1.style.transform = 'rotate(45deg)';
    line1.style.bottom = "10px";
    line1.style.right = "5px";
    line2.style.opacity = '0';
    line3.style.display = 'block';
    line3.style.transform = 'rotate(-45deg)';
    line3.style.top = '5px';
    line3.style.right = '35px';
  }
}

const random = num => Math.floor(Math.random() * num);

open.addEventListener('click', openCloseNav);

const toggleDisplay = (element) => {
  if (element.style.display == '') {
    element.style.display = window.getComputedStyle(element).getPropertyValue('display');
  }
  element.style.display === 'block' ? element.style.display = 'none' : element.style.display = 'block';
}

const toggleDisplayList = list => {
  for (const item of list) {
    if (item.style.display == '') {
      item.style.display = window.getComputedStyle(item).getPropertyValue('display');
    }
    item.style.display === 'block' ? item.style.display = 'none' : item.style.display = 'block';
  }
}

const toggleDisplayToInlineBlock = (element) => {
  if (element.style.display == '') {
    element.style.display = window.getComputedStyle(element).getPropertyValue('display');
  }
  element.style.display === 'inline-block' ? element.style.display = 'none' : element.style.display = 'inline-block';
}

const toggleDisplayToGrid = element => {
  if (element.style.display == '') {
    element.style.display = window.getComputedStyle(element).getPropertyValue('display');
  }
  element.style.display === 'grid' ? element.style.display = 'none' : element.style.display = 'grid';
}

const toggleDisplayToFlex = element => {
  if (element.style.display == '') {
    element.style.display = window.getComputedStyle(element).getPropertyValue('display');
  }
  element.style.display === 'flex' ? element.style.display = 'none' : element.style.display = 'flex';
}

const cyclePropertyOnList = (list, array, property) => { //sets property to first  item from array and updates array ready for next click
  if (list.length > 0) {
    for (const item of list) {
      item.style[property] = array[0];
    }
    array.push(array[0]);
    array.shift(array[0]);
  }
}

const toggleClassName = (element, theClassName) => {
     element.classList.toggle(theClassName);
  }

const toggleClassNameList = (list, theClassName) => {
  for (const item of list) {
      item.classList.toggle(theClassName);
  }
}