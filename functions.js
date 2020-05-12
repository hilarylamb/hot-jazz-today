function handle() {
  const nav = document.getElementById('main-nav');

  const hamburger = document.getElementById('hamburger');

  if (!nav.classList.contains('main-nav--active')) {
    nav.classList.add('main-nav--active');
    nav.classList.add('hambuger--active');
  } else {
    nav.classList.remove('main-nav--active');
    nav.classList.remove('hambuger--active');
  }
}
