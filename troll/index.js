function Event(){
    var sound = new Audio("audio/"+this.innerText+".mp3");
    sound.play();
}



for(var i = 0 ; i < document.querySelectorAll(".display-grid").length ; i++){
    document.querySelectorAll(".display-grid")[i].addEventListener("click",Event);
}