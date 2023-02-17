(function (){
    [...document.querySelectorAll(".project-description")].forEach(button => {
        button.addEventListener("click",function(){
            //console.log(button.classList);
            //console.log("jo");
            //console.log(button.className);
            document.querySelector(".active").classList.remove("active");
            button.className += " active";
            
        })
    })
})();
