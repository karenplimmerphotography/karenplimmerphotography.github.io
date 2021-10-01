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

open.addEventListener('click', openCloseNav);

const toggleDisplay = name => {
  if (name.style.display == '') {
      name.style.display = window.getComputedStyle(name).getPropertyValue('display');  
  } 
  if (name.style.display === 'block') {
      name.style.display = 'none';
  } else {
      name.style.display = 'block';
  }
}