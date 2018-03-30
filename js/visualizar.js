$("visualizar").click(function listar(){
	"nome":Nome,
	 "id":ID,
	 "email":Email,
	 "telefone":telefone,
	 "dataNascimento":DataNascimento

$.ajax({
		type:"POST",
		url:"https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/listar",
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
})
