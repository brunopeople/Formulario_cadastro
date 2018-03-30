$("excluir").click(function excluir(){
	tbContatos.splice(indice_selecionado,1);
	localStorage.setItem("tbContatos", JSON.strigify(tbContatos));
	alert("Registro Excluido com Sucesso.");

	$.ajax({
		type:"POST",
		url:"https://www.mt4.com.br/vagas/desenvolvedor-frontend-junior/api/excluir?id=ID-DO-CONTATO",
		
		
	});

});