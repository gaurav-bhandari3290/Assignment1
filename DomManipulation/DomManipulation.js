document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("changeContentButton");
    let outputDiv = document.getElementById("output");
    let textInput = document.getElementById("textInput");

    button.addEventListener("click", function() {
        outputDiv.innerHTML = "Content changed with Click!";
    });

    outputDiv.addEventListener("mouseover", function() {
        this.style.color = 'red';
    });

    outputDiv.addEventListener("mouseout", function() {
        this.style.color = 'black';
    });

    outputDiv.addEventListener("dblclick", function() {
        this.style.backgroundColor = this.style.backgroundColor === 'yellow' ? 'transparent' : 'yellow';
    });

    outputDiv.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        this.innerHTML = "Right-click detected!";
    });

    textInput.addEventListener("focus", function() {
        this.classList.add("focused");
    });

    textInput.addEventListener("blur", function() {
        this.classList.remove("focused");
    });
});