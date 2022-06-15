function checaIdade(idade) {
	return new Promise(function(resolve, reject){
		if(idade >= 18){
			resolve('Maior de idade');
		}else{
			reject('menor de idade');
		}
	});
}
checaIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });