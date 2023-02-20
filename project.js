(function (){
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
