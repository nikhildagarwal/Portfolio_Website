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


    function pageStats(){
        let homePage = document.querySelector(".h-shape");
        let onHomePage = homePage!=null;
        //console.log("Home: "+onHomePage);

        let aboutPage = document.querySelector(".main-title-about");
        let onAboutPage = aboutPage!=null;
        //console.log("About "+onAboutPage);

        let projectPage = document.querySelector(".main-title-project");
        let onProjectPage = projectPage!=null;
        //console.log("ProjectMain: " +onProjectPage);

        let contactPage = document.querySelector(".main-title-contact");
        let onContactPage = contactPage!=null;
        //console.log("Contact: "+ onContactPage);

        let projectPage1 = document.querySelector(".main-title-project1");
        let onProjectPage1 = projectPage1!=null;
        //console.log("ProjectMain: " +onProjectPage1);
        let projectPage2 = document.querySelector(".main-title-project2");
        let onProjectPage2 = projectPage2!=null;
        //console.log("ProjectMain: " +onProjectPage2);
        let projectPage3 = document.querySelector(".main-title-project3");
        let onProjectPage3 = projectPage3!=null;
        //console.log("ProjectMain: " +onProjectPage3);
        let projectPage4 = document.querySelector(".main-title-project4");
        let onProjectPage4 = projectPage4!=null;
        //console.log("ProjectMain: " +onProjectPage4);
        let projectPage5 = document.querySelector(".main-title-project5");
        let onProjectPage5 = projectPage5!=null;
        //console.log("ProjectMain: " +onProjectPage5);
        
        if(onHomePage){
            const dbref = ref(db);
            get(child(dbref,"homePageVisits/")).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"homePageVisits/"),{
                        Count: 1+snapshot.val().Count
                    })
                }else{
                    set(ref(db,"homePageVisits/"),{
                        Count: 1
                    })
                }
            })
        }
        if(onAboutPage){
            const dbref = ref(db);
            get(child(dbref,"aboutPageVisits/")).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"aboutPageVisits/"),{
                        Count: 1+snapshot.val().Count
                    })
                }else{
                    set(ref(db,"aboutPageVisits/"),{
                        Count: 1
                    })
                }
            })
        }
        if(onProjectPage){
            const dbref = ref(db);
            get(child(dbref,"projectPageVisits/")).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"projectPageVisits/"),{
                        Count: 1+snapshot.val().Count
                    })
                    
                }else{
                    set(ref(db,"projectPageVisits/"),{
                        Count: 1
                    })
                }
            })
        }
        if(onContactPage){
            const dbref = ref(db);
            get(child(dbref,"contactPageVisits/")).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"contactPageVisits/"),{
                        Count: 1+snapshot.val().Count
                    })
                }else{
                    set(ref(db,"contactPageVisits/"),{
                        Count: 1
                    })
                }
            })
        }
        if(onProjectPage1){
            const dbref = ref(db);
            get(child(dbref,"project1Visits/")).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"project1Visits/"),{
                        Count: 1+snapshot.val().Count
                    })
                }else{
                    set(ref(db,"project1Visits/"),{
                        Count: 1
                    })
                }
            })
        }
        if(onProjectPage2){
            const dbref = ref(db);
            get(child(dbref,"project2Visits/")).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"project2Visits/"),{
                        Count: 1+snapshot.val().Count
                    })
                }else{
                    set(ref(db,"project2Visits/"),{
                        Count: 1
                    })
                }
            })
        }
        if(onProjectPage3){
            const dbref = ref(db);
            get(child(dbref,"project3Visits/")).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"project3Visits/"),{
                        Count: 1+snapshot.val().Count
                    })
                }else{
                    set(ref(db,"project3Visits/"),{
                        Count: 1
                    })
                }
            })
        }
        if(onProjectPage4){
            const dbref = ref(db);
            get(child(dbref,"project4Visits/")).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"project4Visits/"),{
                        Count: 1+snapshot.val().Count
                    })
                }else{
                    set(ref(db,"project4Visits/"),{
                        Count: 1
                    })
                }
            })
        }
        if(onProjectPage5){
            const dbref = ref(db);
            get(child(dbref,"project5Visits/")).then((snapshot)=>{
                if(snapshot.exists()){
                    update(ref(db,"project5Visits/"),{
                        Count: 1+snapshot.val().Count
                    })
                }else{
                    set(ref(db,"project5Visits/"),{
                        Count: 1
                    })
                }
            })
        }
        
    }
    
    pageStats();



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
            startTheme();
        
        
        
    }
    getIPstart();
    //console.log(getIPpromise());
    /*let ipName = "IP"+getIP()+"/";
    console.log(ipName);*/

    

function startTheme(){
    
    const dbref = ref(db);
    get(child(dbref,deviceID+"/")).then((snapshot)=>{
        if(snapshot.exists()){

        }else{
            set(ref(db,deviceID+"/"),{
                Theme: "light"
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
    
            getTheme();
        
}

function getIPGET(){
    
            
            GETTHEME();
        
}


function GETTHEME(){
    const dbref = ref(db);
    get(child(dbref,deviceID+"/")).then((snapshot)=>{
        const dataBaseTheme = snapshot.val().Theme;
        if(dataBaseTheme==lightMode){
            updateTheme(darkMode);
        }else{
            updateTheme(lightMode);
        }
    })
}

function updateTheme(theme){
    update(ref(db,deviceID+"/"),{
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

