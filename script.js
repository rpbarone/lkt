const el = document.getElementById('t-icon');
const btnClose = document.getElementById('btn-close');
const doc = document.getElementById('header');
const page = document.getElementById('page');
const menuMobile = document.getElementsByClassName('menu-mobile')[0];
const linksMobile = document.getElementById('links-mobile');
const ilustracao2 = document.getElementsByClassName('ilustracao2')[0];
const footer = document.getElementsByClassName('footer-bg')[0];

const openMenu = () => {
  doc.style.display = "none";
  page.style.display = "none";
  menuMobile.style.display = "flex";
}

const closeMenu = () => {
  doc.style.display = "block";
  page.style.display = "block";
  menuMobile.style.display = "none";
}

const goToLink = () => {
  doc.style.display = "block";
  page.style.display = "block";
  menuMobile.style.display = "none";
}



el.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
linksMobile.addEventListener('click', goToLink);

window.addEventListener('load', () => {
  const w = window.innerWidth;

   w <= 1100 ? footer.style.backgroundImage = "url('./img/footerBgMobile.svg')"
   : null;
})
