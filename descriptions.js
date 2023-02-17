(function (){
    [...document.querySelectorAll(".project-description")].forEach(button => {
        button.addEventListener("click",function(){
            console.log("Hello");
        })
    })
})();
