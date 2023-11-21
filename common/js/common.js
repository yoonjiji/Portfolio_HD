$(function(){
 document.addEventListener('DOMContentLoaded', function() {
  var hamburgerMenu = document.querySelector('.hamburger-menu');
  var menuList = document.querySelector('.menu-list');

  hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('open');
    menuList.classList.toggle('open');
  });
});
}); //function end