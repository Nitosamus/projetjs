//pyramide de mario
function pyramide(input) {
	var inputConverted = parseInt(input)
	var countReturn = 0
	for(let count = inputConverted; count > 0; count--){
		console.log()
		let space;
		let hTag;
		countReturn +=1
		space = " ".repeat(count);
		hTag =  "#".repeat(countReturn);
		console.log(`${space}${hTag}`);

	}
}
pyramide(prompt("salut, bienvenue dans ma super pyramide! combien d' étages veux tu?"))