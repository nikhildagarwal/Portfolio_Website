import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCj9KvX70KZj1krFMlW3ZiFmntzrDsVA2Y",
    authDomain: "yeye-9d09a.firebaseapp.com",
    databaseURL: "https://yeye-9d09a-default-rtdb.firebaseio.com",
    projectId: "yeye-9d09a",
    storageBucket: "yeye-9d09a.appspot.com",
    messagingSenderId: "150403251197",
    appId: "1:150403251197:web:1c51e14f86d4af0eb77794"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    // Initialize Firebase
    
    import{getDatabase,ref,get,set,child,update,remove}
    from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

    const db = getDatabase();

    var darkMode = "dark";
    var lightMode = "light";


    function getIPstart(){
        
        fetch('http://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(data => {
            let ipNumber = data.ip;
            let builder = "";
            for(let i = 0;i<ipNumber.length;i++){
                if(ipNumber.charAt(i)!= '.'){
                    builder+=ipNumber.charAt(i);
                }
            }
            startTheme(builder);
            
        });
        
    }
    getIPstart();
    //console.log(getIPpromise());
    /*let ipName = "IP"+getIP()+"/";
    console.log(ipName);*/

function startTheme(ip){
    const dbref = ref(db);
    get(child(dbref,"IP:"+ip+"/")).then((snapshot)=>{
        if(snapshot.exists()){

        }else{
            set(ref(db,"IP:"+ip+"/"),{
                Theme: "light"
            })
            getIPget();
        }
    })
    
}


function getTheme(ip){
    const dbref = ref(db);
    get(child(dbref,"IP:"+ip+"/")).then((snapshot)=>{
        if(snapshot.exists()){
            const dataBaseTheme = snapshot.val().Theme;
        themeSwitcher(dataBaseTheme);
        }
        
    })
}

function getIPget(){
    fetch('http://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(data => {
            let ipNumber = data.ip;
            let builder = "";
            for(let i = 0;i<ipNumber.length;i++){
                if(ipNumber.charAt(i)!= '.'){
                    builder+=ipNumber.charAt(i);
                }
            }
            getTheme(builder);
        });
}

function getIPGET(ip){
    fetch('http://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(data => {
            let ipNumber = data.ip;
            let builder = "";
            for(let i = 0;i<ipNumber.length;i++){
                if(ipNumber.charAt(i)!= '.'){
                    builder+=ipNumber.charAt(i);
                }
            }
            GETTHEME(builder);
        });
}


function GETTHEME(ip){
    const dbref = ref(db);
    get(child(dbref,"IP:"+ip+"/")).then((snapshot)=>{
        const dataBaseTheme = snapshot.val().Theme;
        if(dataBaseTheme==lightMode){
            updateTheme(darkMode,ip);
        }else{
            updateTheme(lightMode,ip);
        }
    })
}

function updateTheme(theme,ip){
    update(ref(db,"IP:"+ip+"/"),{
        Theme:theme
    })
}

function themeSwitcher(theme){
    if(theme==lightMode){
        document.body.classList.toggle("light-mode");
    }
    
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        getIPGET();
    })
}

getIPget();