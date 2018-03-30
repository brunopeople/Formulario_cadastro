var token = "";

$("btn_login").click(function(){
	var username = $("#username").val();
	var password = $("#password").val();

	$.ajax({
		type:"POST",
		url:"https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/token",
		data:{
			"grant_type":"password",
			"username":username,
			"password":password,
		},

		sucess:function(data){
			token = data.acess_token;
			console.log(data);
		}
	});
});

$("btn_get").click(function(){
	$.ajax({
		type: "GET",
		url: "https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/token",
		headers:{
			"Authorization": "Bearer" +token
		},

		sucess:function(data)
		{
			console.log(data);
		}

		error:function(data)
		{
			console.log($.parseJSON(data.responseText).Message);
		}
	});
});