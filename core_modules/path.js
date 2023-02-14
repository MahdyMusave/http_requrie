const { parse } = require('node:path');
const path = require('node:path');
// console.log(path);
// console.log(path.basename(__filename));
// // console.log(path.basename(__dirname));
// console.log(path.dirname(__filename));
// console.log(path.dirname(__dirname));

// // file Extion 
// console.log(path.extname(__filename));

// // create path Object with parse
// console.log(parse(__filename));

// join

//join----==>c:user/mahde13/Desctop/node>>>>>> /text/subtest/text.html;
console.log(path.join(__dirname,'text','subtext','text.html'));
