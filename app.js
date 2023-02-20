(function () {
    /*[...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });*/
    var darkMode = "dark";
    var lightMode = "light";
    var request = new XMLHttpRequest();
    request.open("GET", "myMode.json", false);
    request.send(null)
    var my_JSON_object = JSON.parse(request.responseText);
    var currState = my_JSON_object[0];
    
    if(currState==lightMode){
        document.body.classList.toggle("light-mode");
    }
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if(currState==lightMode){
            
        }else{
            
        }
    })
})();