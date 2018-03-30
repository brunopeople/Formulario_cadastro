<!DOCTYPE html>
<html>
<head>
	<title>Formulário Progressivo</title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<script type="text/javascript" src="http://code.jquery.com/jquery-3.2.0.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/estilo.css">
	<script type="text/javascript"></script>
		
	
</head>
<body>
	<div class="erros"><p>Preencha todos os campos corretamente!</p></div>
	<div class="ok"><p>Seu cadastro foi enviado para nosso Banco de dados</p></div>

	<form id="msform" method="post" enctype="multipart/form-data" name="msform">
		<ul id="progressbar">
			<li>Iniciando a conta</li>
			<li>Perfis Sociais</li>
			<li>Detalhes Pessoais</li>
		</ul>

		<fieldset>
			<h2 class="fs-tittle">Cria a Conta</h2>
			<h3 class="fs-subtitle">Primeiro Passo</h3>
			<input type="text" name="email" placeholder="Email"/>
			<input type="password" name="senha" placeholder="Senha"/>
			<input type="password" name="csenha" placeholder="Confirmar Senha"/>
			<input type="button" name="next1" class="acao" value="Proximo"/>
		
		</fieldset>

		<fieldset>
			<h2 class="fs-tittle">Perfis Pessoais</h2>
			<h3 class="fs-subtitle">Redes Sociais</h3>
			<input type="text" name="facebook" placeholder="Facebook"/>
			<input type="text" name="twitter" placeholder="Twitter"/>
			<input type="text" name="google" placeholder="Goggle++"/>
			<input type="button" name="prev" class="prev acao" value="Anterior"/>
			<input type="button" name="next2" class="acao" value="Proximo"/>
		</fieldset>

		<fieldset>
			<h2 class="fs-tittle">Detalhes Pessoais</h2>
			<h3 class="fs-subtitle">Informe-nos alguns detalhes</h3>
			<input type="text" name="nome" placeholder="Nome Completo:"/>
			<input type="text" name="id" placeholder="ID:"/>
			<input type="text" name="telefone" placeholder="Telefone"/>
			<input name="Endereco" placeholder="Endereco">
			<input type="button" name="prev" class="prev acao" value="Anterior"/>
			<input type="submit" name="next" class="acao" value="Enviar"/>
		</fieldset>

	</form>

	<script type="text/javascript" src="//code.jquery.com/jquery-3.2.0.min.js"></script>
	<script type="text/javascript" src="js/formulario_cadastro.js"></script>
	<script type="text/javascript" src="http://thecodeplayer.com/uploads/js/jquery.easing.min.js"></script>
</body>
</html>