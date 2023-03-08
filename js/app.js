const burguer = document.querySelector('.burguer');
const navegacion = document.querySelector('.menu-navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const close = document.querySelector('.close');


enlaces.forEach( enlace => enlace.addEventListener('click', scrollLento));

burguer.addEventListener( 'click', openMenu);
close.addEventListener( 'click', closeMenu);
// navegacion.addEventListener( 'click', closeMenu);

function scrollLento(e){
  e.preventDefault();

  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });

}

function openMenu(){
  navegacion.style.display = 'block';
  burguer.style.display = 'none';
  close.style.display = 'block';
}

function closeMenu(){
  navegacion.style.display = 'none';
  burguer.style.display = 'block';
  close.style.display = 'none';
}