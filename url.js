// const url='https://api.divar.ir/v8/actionlog/send';
// // console.log(url);

const url=require('url');
// console.log(url.parse('https://api.divar.ir/v8/actionlog/send'));
const myUrl=new URL('https://api.divar.ir/v8/actionlog/send');

// console.log(myUrl.href);
console.log(myUrl.hostname);
// console.log(myUrl.host);
myUrl.searchParams.append('search','mahdy');
console.log(myUrl.searchParams);
