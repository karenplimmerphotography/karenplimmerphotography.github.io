const mySideNav =  document.getElementById("mySideNav");
const open = document.getElementById("mobile-menu-open");
const close = document.getElementById("mobile-menu-x");

function openNav() {
  mySideNav.style.width = "250px";
  mySideNav.style.opacity = "1";
  }
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    mySideNav.style.width = "0";
  }

  open.addEventListener('click', openNav);
  close.addEventListener('click', closeNav);

