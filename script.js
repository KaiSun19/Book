let myLibrary = [];

function Book(author,title,numPages,read){
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
}

const formButton = document.querySelector(".popForm");
const bookForm = document.querySelector("#bookForm");
const authorText = document.querySelector("#author");
const titleText = document.querySelector("#title");
const pagesText = document.querySelector("#pages");
const submitButton = document.querySelector('button[type="submit"]')
const Catalogue = document.querySelector("#Catalogue")

submitButton.addEventListener("click", function(event){
    event.preventDefault();
})

formButton.addEventListener("click" ,() =>{
    formButton.style.display = "none";
    bookForm.style.display = "flex";
    
})

function getReadSelection(){
    const readText = document.getElementsByName("read")
    choices = [];
    for(i = 0 ; i < readText.length; i++){
        if(readText[i].checked){
            const choice = readText[i].value
            choices.push(choice);
        }
    }
    let readChoice = choices[0];
    let authorChoice = authorText.value;
    let titleChoice = titleText.value;
    let pagesChoice = pagesText.value;
    let newBook = new Book(authorChoice,titleChoice,pagesChoice,readChoice);
    return newBook;
}

function addBook(){

   if(myLibrary.length != 0 ){
       Catalogue.innerHTML = "";
   } 
   myLibrary.push(getReadSelection());
   for(i = 0 ; i <myLibrary.length; i++){
       let currentBook = myLibrary[i]
       createCard(currentBook.author, currentBook.title,currentBook.numPages,currentBook.read)

   }
   const changeButtons = document.getElementsByClassName("changeButton");
   for(i = 0 ; i < changeButtons.length ; i ++ ){
    let currentButton = changeButtons[i]
    currentButton.addEventListener("click",(event) =>{
        let choice = event.path[1].querySelector("#readSelection").innerHTML
        if(choice == "Yes"){
            event.path[1].querySelector("#readSelection").innerHTML = "No"
        }
        else if(choice == "No"){
            event.path[1].querySelector("#readSelection").innerHTML = "Yes"
        }
    })
}
}


function changeRead(bookCard){
    const changeButton = document.createElement("button");
    changeButton.type = "button";
    changeButton.innerHTML = "Click if book is read";
    changeButton.className = "changeButton";
    bookCard.appendChild(changeButton);
    
}

function createCard(author,title,pages,read){
    const bookCard = document.createElement("div")
    const bookAuthor = document.createElement("h4")
    const bookTitle = document.createElement("h4")
    const bookPages = document.createElement("p")
    const bookRead = document.createElement("p")
    bookAuthor.textContent = author;
    bookTitle.textContent = title;
    bookPages.textContent = pages,
    bookRead.textContent = read;
    bookRead.id = "readSelection"
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.id = "bookCard";
    changeRead(bookCard);
    Catalogue.appendChild(bookCard);
}


