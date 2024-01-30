function mouseDown(obj) {
    obj.style.width = "200px";
    obj.style.height = "100px";
    obj.innerHTML = "Release";
    obj.style.backgroundColor="darkViolet";
  }

function mouseUp(obj) {
    obj.style.width = "150px";
    obj.style.height = "px";
    obj.innerHTML = "Click";
    obj.style.backgroundColor="green";
  }

document.getElementById("hover").addEventListener("mouseover", function() {
    this.style.backgroundColor = "green";
});

document.getElementById("hover").addEventListener("mouseout", function() {
    this.style.backgroundColor = "darkKhaki";
});

document.getElementById("key").addEventListener("keydown",function(event){
    alert(`You pressed ${event.key}`);
})