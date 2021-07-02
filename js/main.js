/* Este é o Java Script da pagina. Slide seria o script das imagens
fazerem o efeito slide no topo do site.
Já o Subir, seria o scrip para deixar o botão TOPO funcional. */

$('.slide').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2050
});

$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});