// analyse de données
// les entrepreneurs nées dans les années 70

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("Quels sont les entrepreneurs qui sont nés dans les annés 70 ?");
	for (let index in entrepreneurs){
		if (entrepreneurs[index].year >= 1970 && entrepreneurs[index].year < 1980) {
		console.log(entrepreneurs[index].first);
	}
	};
// array contennat le nom et le prénom des entrepeneurs

console.log("voici les noms et les prénoms de chaque entrepreneur")

	for (let index in entrepreneurs){
		let arrayOfNames = [entrepreneurs[index].first, entrepreneurs[index].last]
		console.log(arrayOfNames);

	};

// Les ages de chaque inventeur aujourd'hui

function currentAge(){
	var age;
	for (let index in entrepreneurs){
		age = 2019 - entrepreneurs[index].year 
		let first = entrepreneurs[index].first
		console.log(`L'Age de ${first} est: ${age}`);
	}
};
currentAge();
// tirage par ordre alphabetique
function sortByAlpahbet(){
	var newArray = []
	for (let index in entrepreneurs){ 
		let first = entrepreneurs[index].first
		newArray.push(`${first}`);
	}
	console.log(newArray.sort());
};

sortByAlpahbet();


