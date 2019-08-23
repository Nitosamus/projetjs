// Bibliotecquaire
// est-ce que tous les livres ont été au moins empruntés une fois?

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function runted(){
	for(let index in books){
		if(books[index].rented > 1){
			console.log(books[index].title);
			console.log("yes, more times");
		} else {
		console.log(books[index].title);
		console.log("no")};
	};
};
runted()


// quel est le livre le plus emprunté?

function runtestBook(){
	var arrayNumber = [];
	for(let index in books){
		arrayNumber.push(books[index].rented)
	}
	var max;
	max = Math.max(...arrayNumber)
	return max;
}

function nameOfMax(){
		for(let index in books){
			if (books[index].rented === runtestBook()){
				console.log(` Le livre le plus emprunté c'est: ${books[index].title}`)
			};
	};
};
nameOfMax();

// le livre le moins emprunté

function lessRuntedBook(){
	var arrayNumber = [];
	for(let index in books){
		arrayNumber.push(books[index].rented)
	}
	var min;
	min = Math.min(...arrayNumber)
	return min;
}

function nameOfMin(){
		for(let index in books){
			if (books[index].rented === lessRuntedBook()){
				console.log(` Le livre le moins emprunté c'est: ${books[index].title}`)
			};
	};
};
nameOfMin();

// chercher le livre avec l'id= 873495

function nameOfBook(){
		for(let index in books){
			if (books[index].id === 873495){
				console.log(` Le livre avec l'id 873495 c'est: ${books[index].title}`)
			};
	};
};
nameOfBook();

// supprimer le livre ave l'id= 133712
var bookName;
function nameOfBookId(){
		for(let index in books){
			if (books[index].id === 133712){
				bookName = books[index].title
				delete books[index];
			};
	};
	return bookName;
};
console.log(` Le livre suprimé avec l'id 133712 c'est: ${nameOfBookId()}`)
console.log(books)

// trier livre par ordre alphabétique

function sortByAlpahbet(){
	var newArray = []
	for (let index in books){ 
		let title = books[index].title
		newArray.push(`${title}`);
	}
	console.log(`voici les livers dans l'ordre alphabétique : ${newArray.sort()}`);
};
sortByAlpahbet();