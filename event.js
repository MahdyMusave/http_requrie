const EventEmitter = require('events');
const Emiter = new EventEmitter();
// console.log(Emiter.emit('message'));
//if was up this not working ///------------->Emiter.emit('message');
// Emiter.addListener('message',()=>{
//     console.log('listen to my ');
// })

Emiter.addListener('message',(name,age)=>{
    console.log(name,age);
})
// Emiter.emit('message');
Emiter.emit('message','mahdy','19');