

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
	string = string.toLowerCase(); //Tudo para letra minuscula

	numbers = ['0','1','2','3','4','5','6','7','8','9'];
	operators = ['+','-','*','/','^','(',')'];
	functions = ['sin', 'cos', 'log'];
	constants = ['PI', 'E', 'x'];

	allowed = [];
	allowed.push(numbers);
	allowed.push(operators);
	allowed.push(functions);
	allowed.push(constants);
	
	//Remove todos os termos permitidos da string
	//Se nao sobrar nada é porque todos os termos da expressao do usuário estão dentro do permitido
	//Se sobrar alguma coisa significa que tem termos inválidos
	var strTest = string;

	for(var i = 0; i < allowed.length; i++)
	{
		var a = allowed[i];

		for(var j = 0; j < a.length; j++)
		{
			//Remove todas as ocorrências
			if(i == 1 & j == 4)
			{
				strTest = strTest.replace(new RegExp("\\" + a[j], "g"), '');
				continue;
			}
			try
			{
				strTest = strTest.replace(new RegExp(a[j], "g"), '');
			}
			catch(e)
			{
				strTest = strTest.replace(new RegExp("\\" + a[j], "g"), '');
			}
		}
	}

	//Se a string teste está vazia é porque a expressão está OK
	if(strTest.length == 0)
	{
		//Adiciona Math. as funcoes
		for(var i = 0; i < functions.length; i++)
		{
			string = string.replace(new RegExp(functions[i], "g"), ("Math."+functions[i]));
		}
		return string;
	}

	console.log(strTest);
	//Se nao, retorna nada. Expressão inválida
	return "";
}