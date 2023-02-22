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

    function getUniqueID(){
        var navigator_info = window.navigator;
        var screen_info = window.screen;
        var uid = navigator_info.mimeTypes.length;
        uid+=navigator_info.userAgent.replace(/\D+/g, '');
        uid += navigator_info.plugins.length;
        uid+= screen_info.height  || '';
        uid += screen_info.width || '';
        uid += screen_info.pixelDepth || '';
        return uid;
      }
    
      var deviceID = getUniqueID();
     

    function getIPstart(){
        
        fetch('http://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(data => {
            let ipNumber = data.ip;
            
            startTheme(ipNumber);
            
        });
        
    }
    getIPstart();
    //console.log(getIPpromise());
    /*let ipName = "IP"+getIP()+"/";
    console.log(ipName);*/

function startTheme(ip){
    
    const dbref = ref(db);
    get(child(dbref,deviceID+"/")).then((snapshot)=>{
        if(snapshot.exists()){

        }else{
            set(ref(db,deviceID+"/"),{
                Theme: "light",
                IP: ip
            })
            getIPget();
        }
    })
    
}


function getTheme(){
    const dbref = ref(db);
    get(child(dbref,deviceID+"/")).then((snapshot)=>{
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
            
            getTheme(ipNumber);
        });
}

function getIPGET(){
    fetch('http://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(data => {
            let ipNumber = data.ip;
            
            GETTHEME(ipNumber);
        });
}


function GETTHEME(ip){
    const dbref = ref(db);
    get(child(dbref,deviceID+"/")).then((snapshot)=>{
        const dataBaseTheme = snapshot.val().Theme;
        if(dataBaseTheme==lightMode){
            updateTheme(darkMode,ip);
        }else{
            updateTheme(lightMode,ip);
        }
    })
}

function updateTheme(theme,ip){
    update(ref(db,deviceID+"/"),{
        Theme:theme,
        IP:ip
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