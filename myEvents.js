const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on('greet',(username)=>{
    console.log(`hello ${username} , you are inside a event`);
})

// eventEmitter.emit("greet","harsh");

const listener =()=> console.log("i am a listener");


eventEmitter.on("test", listener);
eventEmitter.emit("test")