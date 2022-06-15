var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnEement = document.querySelector('#app button');

var nomes = JSON.parse(localStorage.getItem('list')) || []; //CHAMA O VALOR DO JSON NO STORAGE E CASO NAO TIVER
																  //A VARIAVEL ENVIA ELA COMO UM ARRAY VAZIO

function renderizeTudo(){
	listElement.innerHTML = ''; //EXCLUI TUDO QUE TEM DENTRO DA TAG UL
	for(nome of nomes){
		var nomeElement = document.createElement('li');
		var textElement = document.createTextNode(nome);

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#');
		var pos = nomes.indexOf(nome); //SELECIONA O INDICE DO ARRAY EM QUE ESTÁ
		linkElement.setAttribute('onclick', 'deletaNome('+pos+')');
		var linkName = document.createTextNode('Excluir');

		linkElement.appendChild(linkName);
		nomeElement.appendChild(textElement);
		listElement.appendChild(nomeElement);
		listElement.appendChild(linkElement);
	}
}

renderizeTudo();

function adicionaLista(){
	console.log(nomes);
	var textElement = inputElement.value; //PEGA O VALOR DA VARIAVEL
	nomes.push(textElement); //ADICIONA O NOME NO FINAL DO ARRAY
	inputElement.value = ''; //LIMPA O IMPUT
	saveToStorage();
	renderizeTudo();
}

btnEement.onclick = adicionaLista;

function deletaNome(pos){
	console.log(nomes);
	nomes.splice(pos, 1); //REMOVE(OU ALTERA) O CONTEUDO DA LISTA
	saveToStorage();
	renderizeTudo();
}

	function saveToStorage(){
		localStorage.setItem('list', JSON.stringify(nomes)); //SALVA O ARRAY EM FORMA DE STRING USANDO JSON NO STORAGE
	}
