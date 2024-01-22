document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "You clicked the button!";
});

document.getElementById("hoverDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});

document.getElementById("hoverDiv").addEventListener("mouseout", function() {
    this.style.backgroundColor = "blue";
});

document.addEventListener("dblclick", function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightgrey' ? 'white' : 'lightgrey';
});

document.addEventListener("keydown", function(event) {
    document.getElementById("keyInfo").innerHTML = `Key pressed: ${event.key} (Code: ${event.code})`;
});


