document.querySelector("button").addEventListener("click",handleClick);

function handleClick() {
    alert("I got click");
}

document.addEventListener("keypress",function(event){
    const keyname = event.key;
    
});

document.getElementById("btn").addEventListener("click",cal);

function cal() {
    var r = document.getElementById("radius").value;
    document.getElementById("area").innerHTML = r*r*3.14159;
}

var numberOfDrumButtons = (document.querySelectorAll(".drum").length)+1;

for (let i = 0;i<numberOfDrumButtons;i++) {
    var d = document.querySelectorAll(".drum")[i].innerHTML;
    this.style.color = "white";
    switch(keyname) {
        case "w" :
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            alert(keyname);
            break;
    }
}




