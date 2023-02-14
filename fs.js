
const fs= require('fs');
const path=require('path');
// console.log(fs.close);

// fs.mkdir(path, mode, callback)
// console.log(path.dirname(__filename))

// fs.mkdir(path.join(__dirname,'mkdir'),{},(err)=>{
//     if(err) console.log(err);
//     console.log('create folder');
// });

// fs.writeFile(path.join(__dirname,'mkdir','mkdir.js'),'mahdy site','utf8',(err)=>{
//     if(err) console.log(err);
//     //over right
//     // fs.writeFile(path.join(__dirname,'mkdir','mkdir.js'),'mahdy ','utf8',(err)=>{
//     //     if(err) console.log(err);
//     //     console.log('create file');
//     // });
    

//     //append file;
//     fs.appendFile(path.join(__dirname,'mkdir','mkdir.js'),' is here ','utf8',(err)=>{
//         if(err) console.log(err);
//         console.log('create file');
//     });
//     console.log('create file');
// });

// fs.readFile(path.join(__dirname,'mkdir','mkdir.js'),'utf8',(err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
// })

// fs.rename(
//     path.join(__dirname,'mkdir','mkdir.js'),
//     path.join(__dirname,'mkdir','mahdy.js'),
//     (err)=>{
//         if(err) console.log(err);
    
// })

fs.rename(
    path.join(__dirname,'mkdir','mahdy.js'),
    path.join(__dirname,'mkdir','nima.js'),
    (err)=>{
        if(err) console.log(err);
    
})