const burguer = document.querySelector('.burguer');
const navegacion = document.querySelector('.menu-navegacion');
const close = document.querySelector('.close');

burguer.addEventListener( 'click', openMenu);
close.addEventListener( 'click', closeMenu);
navegacion.addEventListener( 'click', closeMenu);

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