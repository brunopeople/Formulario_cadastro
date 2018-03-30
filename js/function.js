$(function()

{
	var atual_fs, next_fs, prev_fs;
	var formulario = $('form[name=msform]');

	function next(elem){
	
	{
		atual_fs = $(elem).parent();
		next_fs = $(elem).parent().next();

		$('#progress li').eq($('fieldset').index(next_fs)).addClass('ativo')
		atual_fs.hide(800);
		next_fs.show(800);
	}


	$('.prev').click(function()
	{
		atual_fs = $(this).parent();
		prev_fs = $(this).parent().prev();

		$('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo')
		atual_fs.hide(800);
		prev_fs.show(800);

	});
		$input('input[name=next1]').click(function(){

			var array = form.serializeArray();
			

			if(array[0].value == '' || array[1].value == '' || array[2].value == '')
			{

				$('.erros').html('<p>Clicou em proximo na primeira etapa</p>');
			}

			else 
			{
				$('.resp').html('');
				next($(this));
			}
			

		});


		$input('input[name=next2]').click(function(){

			var array = form.serializeArray();
			

			if(array[3].value == '' || array[4].value == '' || array[5].value == '')
			{

				$('.resp').html('<p>Informe aqui suas Redes Socias</p>');
			}

			else 
			{
				$('.resp').html('');
				next($(this));
			}
			

		});

		$input('input[name=next3]').click(function(){

			var array = form.serializeArray();
			

			if(array[6].value == '' || array[7].value == '' || array[8].value == '')
			{

				$('.erros').html('<p>Informe seus informações pessoais por favor!</p>');
			}

			else 
			{
				$('.resp').html('<div class="ok">Seu cadastro foi completado</div>');
			}
			

		});

		$('input[type=submit]').click(function(evento){
			evento.preventDefault();
		});

}


