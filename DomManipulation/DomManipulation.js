const note = document.querySelector('.notes');
const createBtn = document.getElementById('create');

createBtn.addEventListener('click', () => {
    let createDiv=document.createElement("div");
    note.appendChild(createDiv);
    createDiv.className = "textBox";
    let inputBox = document.createElement("textarea");
    let del = document.createElement("button");
    del.textContent = "Delete"; 
    del.id = "delete"; 
    createDiv.appendChild(inputBox);
    createDiv.appendChild(del);
});

note.addEventListener("click", function(event) {
    if (event.target.id === "delete") {
        event.target.parentElement.remove();
    }
});
