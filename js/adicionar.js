var = token
$("salvar").click(function Adicionar(){
var contato = JSON.strigify({
		ID: $("#id").val(),
		Nome: $("#nome").val(),
		Telefone: $("#telefone").val(),
		Email: $("#email").val(),
		DataNascimento: $("#dataNascimento").val()
});
	tbContatos.push(contato);
	localStorage.setItem("tbContatos" ,JSON.strigify(tbContatos));
	alert("Registro Adicionado com Sucesso");
	return true;
}

		$.ajax({
		type:"POST",
		url:"https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/token",
		data:{
			"nome":Nome,
			"id":ID,
			"email":Email,
			"telefone":telefone,
			"dataNascimento":DataNascimento

		},

		sucess:function(data){
			token = data.acess_token;
			console.log(data);
		}
	});
});


