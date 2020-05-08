

//Pega os dados inseridos na caixa pelo usuário, valida e envia para o texto txtFx
//Só será plotado no canvas a função que corresponde ao texto txtFx
function getInputExpression()
{
	var caixaDeEntrada = document.getElementById("caixaDeEntrada");
    var texto = document.getElementById("txtFx");

    var expressao = validateExpression(caixaDeEntrada.value);

    if(expressao.length > 0)
    {
    	texto.textContent = "f(x) = " + expressao;
    }
    else
    {
    	caixaDeEntrada.value = "";
    	alert("Expressão inválida!");
    }
}

//Esse algoritmo valida a expressao do usuário, verifica erros ou funções que não correspondem à calculadora
//Evita injeção de código e riscos de segurança
function validateExpression(string)
{
	string = string.replace(/\s+/g, ''); //Remove todos os espaços
	string = string.toLowerCase(); //Tudo para letra minúscula

	allowed = 
	[
		'+','-','*','/','0','1','2','3','4','5','6','7','8','9',
	]
	

	console.log(allowed[0]);


	return string;
}