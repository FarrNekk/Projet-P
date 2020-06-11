//Ce script permet d'animer notre page html.

//Cet événement sert à animer le menu hamburger lorsque la page ce réduit de moitié. 
$('.m-nav-toggle').click(function(e){
    e.preventDefault();
    $('.m-right').toggleClass('is-open');
    $('.m-nav-toggle').toggleClass('is-open');
})

