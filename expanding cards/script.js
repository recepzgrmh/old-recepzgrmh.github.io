document.addEventListener("click",function(event){
    removeActiveClasses();
    event.target.classList.add("active");
})

function removeActiveClasses(){
    for(var i = 0 ; i < document.querySelectorAll(".panel").length ; i++){
        document.querySelectorAll(".panel")[i].classList.remove("active");
    }
}
