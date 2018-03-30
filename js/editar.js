$("editar").click(function Editar(){
tbContatos[indice_selecionado]= JSON.strigify({
		ID: $("#id").val(),
		Nome: $("#nome").val(),
		Telefone: $("#telefone").val(),
		Email: $("#email").val(),
		DataNascimento: $("#dataNascimento").val()
	});

$.ajax({
		type:"POST",
		url:"https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/salvar",
		data:{

	$("#tbListar").on("click", ".glyphicon glyphicon-pencil", function(){
	operacao = "Editar";
	indice_selecionado = parseInt($(this).attr("alt"));
	var cli = JSON.parse(tbContatos[indice_selecionado]);
	$("#id").val(cont.id);
	$("#nome").val(cont.nome);
	$("#telefone").val(cont.telefone);
	$("#email").val(cont.email);
	$("#dataNascimento").val(cont.dataNascimento);

	$("#id").attr("readonly","readonly");
		$("#nome").focus();
});
		},

		sucess:function(data){
			token = data.acess_token;
			console.log(data);
		}
	});

	localStorage.setItem("tbContatos",JSON.strigify(tbContatos));
	alert("Informações Editadas");
	operacao = "Adicionar";
	return true;
	}
});


	





$("#formContato").on("submit", function(){
	if(operacao == "Adicionar")
		return Adicionar();
	else
		return Editar();
});



$("#tbListar").on("click",".glyphicon glyphicon-remove", function(){
	indice_selecionado = parseInt($(this).attr("alt"));
	excluir();
	listar();
});
