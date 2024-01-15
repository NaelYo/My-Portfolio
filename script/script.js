// Navbar
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
if (window.pageYOffset > 100) {
  nav.classList.add('bg-dark', 'shadow');
} else {
  nav.classList.remove('bg-dark', 'shadow');
}
});

// Parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $(' section .jumbotron p ').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    $(' section .jumbotron h1 ').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $(' section .jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });


});