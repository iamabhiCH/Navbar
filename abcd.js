const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
});