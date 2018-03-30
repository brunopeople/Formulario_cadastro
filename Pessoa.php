<?php

class Pessoa
{
	public $email;
	public $senha;
	public $confirmasenha;

	public $facebook;
	public $twitter;
	public $googleplus;

	public $nome;
	public $id;
	public $telefone;
	public $endereco;
}

public function __construct($id = false)
{
	if($id)
	{
		$this->id = $id;
		$this->carregar();
	}
}



public function carregar()
{
	$query = "SELECT id,nome,telefone,endereco,endereco from pessoas_cadastradas WHERE id= :id";
	$conexao = Conexao::pegarConexao();
	$stmt = $conexao->prepare($query);
	$stmt = bindValue(':id',$this->id);
	$stmt->execute();
	$linha = $stmt->fecth();
	$this->id = $linha['id'];
	$this->nome = $linha['nome'];
	$this->telefone = $linha['telefone'];
	$this->endereco = $linha['endereço'];

}


public static function listarContantos()
{
	$query = "SELECT  "
	$conexao = Conexao::pegarConexao();
	$resultado = $conexao->query($query);
	$lsita = $resultado->fecthAll();
	return $lista;
}



?>