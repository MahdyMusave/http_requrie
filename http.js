
// const fs = require('fs');
// const http=require('http');
// const path=require('path');
// // console.log(http);
// // const sever=http.createServer();
// const sever=http.createServer((req,res)=>{
//     // console.log(req.url);
//    if(req.url =='/'){
//         // res.write('<h1>mahdy com soom</h1>');
//         // res.end('<h1>mahdy com soom</h1>');
//         fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }else{
//                     res.end(data);
//                 }
            
//             })
//         }
// });
// // console.log(sever);
// // http.createServer((reg,res)=>{
// //     res.writable('hello word');
// //     res.end();
// // }).listen(8000);
// sever.listen(3000,()=>{
//     console.log('server is running 3000');
// });
// // console.log(sever);
// <--???????????????????????--> step 2
// const http=require('http');
// const fs= require('fs');
// const path=require('path');


// // console.log(http, fs, path);
// const server=http.createServer((req,res)=>{
//     // console.log(res);
//     // console.log(req.url);
//     // if(req.url == '/'){
//         // res.write('<h2>mahdy server working</h2>');
//            res.write('<h1>mahdy com soom</h1>');
//            res.end();
//     // }
// });

// server.listen(3000,()=>{
//     console.log('this running on port 3000');
// });
// <--???????????????????????--> step 3
const http=require('http');
const fs= require('fs');
const path=require('path');


// console.log(http, fs, path);
const server=http.createServer((req,res)=>{
    // console.log(res);
    // console.log(req.url);
    // res.end('mahdy');
    // fs.readFile(
    //     path.join(__dirname,'public','index.html'),{},(err,data)=>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             res.writeHead(200, {"type":"index/html"});
    //             res.end(data);
    //         }
    //     }
    // )
    if(req.url == '/'){
        fs.readFile(
            path.join(__dirname,'public','index.html'),{},(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    res.writeHead(200, {"Content-Type":"index/html"});
                    res.end(data);
                }
            }
        )
    }else if(req.url == '/about'){
        fs.readFile(
            path.join(__dirname,'public','about.html'),{},(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    res.writeHead(200, {"Content-Type":"about/html"});
                    res.end(data);
                }
            }
        )
    }else if(req.url == '/profile'){
        fs.readFile(
            path.join(__dirname,'public','profile.html'),{},(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    res.writeHead(200, {"Content-Type":"profile/html"});
                    res.end(data);
                }
            }
        )
    }









});

server.listen(3000,()=>{
    console.log('this running on port 3000');
});