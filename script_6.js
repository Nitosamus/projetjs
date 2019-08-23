//codes de la vi

function codonTable(){
	var codeArn;
	codeArn = "CCGUCGUUGCGCUACAGC";
	var tabArn;
	tabArn = [];
	var a = 3;
	var count =0
		while( count < codeArn.length){
			let codon;
			codon = codeArn.substring(count, a);
			tabArn.push(codon);
			count +=3;
			a +=3;
		};
return tabArn;
};

console.log(codonTable());
console.log(codonTable()[0])
function proteineBuilt(){
	var aaTable;
	for(let index in codonTable()){
		aaTable = [];
		var codon = codonTable()[index];
			if (codon === "UCC" || codon === "UCU" || codon === "UCA" || codon === "AGU" || codon === "AGC"){
			aaTable.push("Sérine");}
			else if (codon === "CCU" ||  codon === "CCC" || codon === "CCA" || codon === "CCG"){
			aaTable.push("Proline");}
			else if (codon === "UUA" || codon === "UUG") {
			aaTable.push("Leucine");}
			else if (codon === "UUU" || codon === "UUC"){
			aaTable.push("Phénylalamine")}
			else if (codon === "CGU" || codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG"){
			aaTable.push("Arginine");}
			else if (codon === "UAU" || codon === "UAC"){
			aaTable.push("Tyrosine");}
			else {
			console.log("Aucun acide aminée correspondante"); }
	};
	return aaTable;
};

console.log(proteineBuilt());
// deuxiemme branche
function codonTable(){
	var codeArn;
	codeArn = "CCUCGCCGGUACUUCUCG";
	var tabArn;
	tabArn = [];
	var a = 3;
	var count =0
		while( count < codeArn.length){
			let codon;
			codon = codeArn.substring(count, a);
			tabArn.push(codon);
			count +=3;
			a +=3;
		};
return tabArn;
};

console.log(codonTable());
console.log(codonTable()[0])
function proteineBuilt(){
	var aaTable;
	for(let index in codonTable()){
		aaTable = [];
		var codon = codonTable()[index];
			if (codon === "UCC" || codon === "UCU" || codon === "UCA" || codon === "AGU" || codon === "AGC"){
			aaTable.push("Sérine");}
			else if (codon === "CCU" ||  codon === "CCC" || codon === "CCA" || codon === "CCG"){
			aaTable.push("Proline");}
			else if (codon === "UUA" || codon === "UUG") {
			aaTable.push("Leucine");}
			else if (codon === "UUU" || codon === "UUC"){
			aaTable.push("Phénylalamine")}
			else if (codon === "CGU" || codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG"){
			aaTable.push("Arginine");}
			else if (codon === "UAU" || codon === "UAC"){
			aaTable.push("Tyrosine");}
	};
	return aaTable;
};
console.log(proteineBuilt());
