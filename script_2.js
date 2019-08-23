// Opérations et boulces
//calcul rapides
var myFactor;
function factorial(input){
	var inputConverted = parseInt(input);
	count = inputConverted;
	myFactor = inputConverted;
	while(count >1){
		count--;
		myFactor *=count
	}	
	return myFactor;
} ;
console.log(factorial(prompt("De quel nombre veut tu calculer la factorielle ?")))
console.log(`Le résultat est : ${myFactor}`)

