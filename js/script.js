var form_atual, proximo, anterior;
var esquerda,opacidade, escala;
var animacao;


$(".next").click(function){
	if(animacao) return false;
	animacao = true;

	form_atual = $(this).parent();
	proximo = $(this).parent().next();

	$("#progressbar li").eq($("fieldset").index(proximo)).addClass("active");

	proximo.show();

	atual.animate({opacity:0},{
		step:function(now,mx){
			scale = 1-(1-now)*0.2;
			left = (now*50)+"%";
			opacity = 1-now;
			atual.css({'transform':'scale('+scale+')'});
			proximo.css({'left':left,'opacity':opacity});

		},

		duration:800,
		complete:function(){
			form_atual.hide();
			animacao = false;
		},

		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animacao) return false;
	animacao = true;

	form_atual = $(this).parent();
	anterior = $(this).parent().prev();

	$("#progressbarli").eq("fieldset").index(form_atual)).removeClass("active");
	anterior.show();

	form_atual.animacao({opacity:0},{
		step:function(now,mx){
			scale = 0.8 + (1-now)*0.2;
			left:((1-now)*50)+"%";
			opacity = 1- now;
			form_atual.css({'left':left});
			anterior.css({'transform':'scale'(+scale+')','opacity':opacity});
		},

		duration: 800,
		complete:function(){
			form_atual.hide();
			animating = false;
		},
		easing: 'easeInOutBack'
	});

});

	$(".submit").click(function(){
		return false;
	})

}