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

    

function startTheme(){
    const dbref = ref(db);
    get(child(dbref,"Theme/")).then((snapshot)=>{
        if(snapshot.exists()){

        }else{
            set(ref(db,"Theme/"),{
                Theme: "light"
            })
        }
    })
    
}
startTheme();

function getTheme(){
    const dbref = ref(db);
    get(child(dbref,"Theme/")).then((snapshot)=>{
        if(snapshot.exists()){
            const dataBaseTheme = snapshot.val().Theme;
        themeSwitcher(dataBaseTheme);
        }
        
    })
}

function GETTHEME(){
    const dbref = ref(db);
    get(child(dbref,"Theme/")).then((snapshot)=>{
        const dataBaseTheme = snapshot.val().Theme;
        if(dataBaseTheme==lightMode){
            updateTheme(darkMode);
        }else{
            updateTheme(lightMode);
        }
    })
}

function updateTheme(theme){
    update(ref(db,"Theme/"),{
        Theme:theme
    })
}

function themeSwitcher(theme){
    if(theme==lightMode){
        document.body.classList.toggle("light-mode");
    }
    
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        GETTHEME();
    })
}

getTheme();