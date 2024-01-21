const library = [];

const container = document.getElementById('container');


let inputData = prompt('Enter book data separate by ";"');
if (inputData)
    while (inputData) {
        let splitData = inputData.split(";");
        let newBook = new Book(splitData[0], splitData[1], splitData[2], splitData[3]);
        library.push(newBook);
        console.log(library);
        inputData = prompt('Enter book data separate by ";"');
    }

printLibrary(library);
findBook(library, 443);

function findBook(library, isbn) {
    const index = library.findIndex(b => b.isbn === isbn);
    console.log(index);
    const newH2 = document.createElement("h2");
    const indexFound = document.createTextNode(`Book with ISBN ${isbn} have index ${index}`);
    const indexNotFound = document.createTextNode(`Book with ISBN ${isbn} didnt found`);

    if (index !== -1) {
        newH2.appendChild(indexFound);
        container.appendChild(newH2);
    } else{
        newH2.appendChild(indexNotFound);
        container.appendChild(newH2);
    }
        return index;
}

function printLibrary(x) {
    x.forEach((b) => {
        const newH3 = document.createElement("h3");
        const textH3 = document.createTextNode(`${b.toString()}`)
        newH3.appendChild(textH3);
        container.appendChild(newH3);
    });
}

function Book(isbn, title, author, year) {
    this.isbn = +(isbn);
    this.title = title;
    this.author = author;
    this.year = +(year);
    this.toString = function () {
        return `ISBN : ${this.isbn}, Title : ${this.title},
                Author : ${this.author}, Year : ${this.year}`;
    }
}