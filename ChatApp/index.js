const ChatRoom = require("./ChatRoom.js")

const chat = new ChatRoom()

chat.on('join',(user)=>{
    console.log(`${user} has joined the chat`)
})

chat.on('message',(user,message)=>{
    console.log(`${user} :${message}`)
})

chat.on('leave',(user)=>{
    console.log(`${user} has left the chat`)
})

//simulating

chat.join('alice')
chat.join('bob')

chat.sendMessage('Alice','hey bob , Hello')
chat.sendMessage('bob','hey Alice , Hello')

chat.leave('Alice')
chat.sendMessage('Alice','this message wont be sent')
chat.leave("bob")


