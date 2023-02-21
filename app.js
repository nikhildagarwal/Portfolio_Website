function themeSwitcher(){
    const filePath = "C://Users/email/Portfolio_Website/public/myMode.json";

    let darkMode = "dark";
    let lightMode = "light";
    let request = new XMLHttpRequest();
    request.open("GET", "startMode.json", false);
    request.send(null)
    let my_JSON_object = JSON.parse(request.responseText);
    
    let currState = my_JSON_object.theme;
    if(currState==lightMode){
        document.body.classList.toggle("light-mode");
    }
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const nextState = {
            theme:''
        }
        if(currState==lightMode){
            nextState.theme = darkMode;
        }else{
            nextState.theme = lightMode;
        }
        
        currState = nextState.theme;
        

        let newData = fs.readFileSync(filePath);
        let jsonData = JSON.parse(newData);

        jsonData = nextState;

        fs.writeFileSync(filePath,JSON.stringify(jsonData));
        let hello = fs.readFileSync(filePath);
        let printObj = JSON.parse(hello);
        console.log(printObj);
    })
}

themeSwitcher();