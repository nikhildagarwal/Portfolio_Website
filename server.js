
const http = require("http");
const url = require("url");
const fs = require("fs");


const server = http.createServer((req,res) => {
    let parsedURL = url.parse(req.url,true);
    let path = parsedURL.path.replace(/^\/+|\/+$/g,"");
    if(path==""){
        path = "home.html";
    }
    console.log(`Requested path ${path} `);
    
    let file =  __dirname +"/"+path;

    fs.readFile(file,function(err,content){
        if(err){
            console.log(`file not found  ${file}`);
            res.writeHead(404);
            res.end();
        }else{
            console.log(`Returning ${path}`);
            res.setHeader("X-Content-Type-Options","nosniff");
            
            switch(path){
                
                
                case "home.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;
                case "analytics.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;
                case "about.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;
                case "project.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;
                case "contact.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;

                case "project1.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;
                case "project2.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;
                case "project3.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;
                case "project4.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;
                case "project5.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;

                case "styles.css":
                    res.writeHead(200,{"Content-type":"text/css"});
                    break;
                case "media.css":
                    res.writeHead(200,{"Content-type":"text/css"});
                    break;
                case "Resume_nikhildagarwal.pdf":
                    res.setHeader("Content-type","application/pdf");
                    break;
                case "project6.html":
                    res.writeHead(200,{"Content-type":"text/html"});
                    break;    
                case "app.js":
                    res.writeHead(200,{"Content-type":"application/javascript"});
            }
            res.end(content);
        }
    });
});


server.listen(3000, "localhost", () => {
    console.log("Listening on port 3000");
});
