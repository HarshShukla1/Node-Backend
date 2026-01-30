const EventEmitter = require('events')

class Chat extends EventEmitter{
    sendMessage(msg)

    {
        console.log(`message Sent:${msg}`);
        this.emit("messageReceived",msg);
    }
}

const chat= new Chat();
chat.on("messageReceived",(msg)=>{
    console.log(`new Message: ${msg}`);
});

chat.sendMessage("hello harsh");