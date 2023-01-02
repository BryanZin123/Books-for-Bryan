document.addEventListener("DOMContentLoaded", function(){
    const list = document.querySelector("#book-list ul");
    const forms = document.forms;
   //delete
    list.addEventListener("click", e=>{
        if(e.target.className=="delete"){
            const li=e.target.parentElement;
            li.parentNode.removeChild(li);
           
        }
    });
    //add 
    const addFrom= forms['add-book'];
    addFrom.addEventListener("submit", function(e){
        e.preventDefault();
        const value = addFrom.querySelector('input[type="text"]').value;
        console.log(value);

        const li=document.createElement("li");
        const bookName=document.createElement("span");
        const deleteBtn=document.createElement("span");

        bookName.textContent=value;
        deleteBtn.textContent="delete";

        bookName.classList.add("name");
        deleteBtn.classList.add("delete");

        li.appendChild(bookName);
        li.appendChild(deleteBtn);

        list.appendChild(li);
    });

    
    //search
    const searchBar = forms["search-books"].querySelector("input");
    searchBar.addEventListener("keyup", e =>{
        const term= e.target.value.toLowerCase();
        const books = list.getElementsByTagName("li");

        Array.from(books).forEach(book =>{
            const title = book.firstElementChild.textContent;
            console.log(book); 

            if(title.toLowerCase().indexOf(term) != -1){
                book.style.display="block";
            }
            else{
                book.style.display="none";
            }
        })
    })



});

