//notes application
const notescontainer = document.querySelector(".added_notes");
const addNotes = document.querySelector(".add_note_btn");
let notes = document.querySelectorAll(".inputs");
//show notes
function seeNotes(){
    notescontainer.innerHTML =localStorage.getItem("notes");
}
seeNotes();

//local storage func
function storageUpdate(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}
//add notes
addNotes.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className ="inputs";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "../images/trash-can_9057685.png";
    notescontainer.appendChild(inputBox).appendChild(img);
})
//delete note 
notescontainer.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        storageUpdate();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputs");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                storageUpdate();
            }
        })
    }
})
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})