// navbar-toggler
// aria-expanded="true"


// nav
menuBtn = document.getElementsByClassName('navbar-toggler')[0];

function addBackground() {
  nav = document.getElementsByTagName('nav')[0]
  ariaExpanded = menuBtn.getAttribute('aria-expanded');
  if(ariaExpanded == 'false') {
    nav.style.backgroundColor = '#113448';
    console.log(111);
  }
}

menuBtn.addEventListener( "click" , addBackground);