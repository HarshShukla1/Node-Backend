const http = require('http')

const server = http.createServer(function(req , res){
    console.log('incoming request')
    res.writeHead(200)
    res.end('Thanks')
});

server.listen(8000,function(){
    console.log(`HTTP server is running on port 8000`)
})