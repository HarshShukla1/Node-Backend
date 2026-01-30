const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer(function(req,res){

    const method = req.method;
    const path = req.url

    const log = `$[${Date.now()}]: ${path}`;
    fs.appendFileSync('log.txt','utf-8')

    switch(method)
    {
        case 'GET':{
            switch(path){
            case '/':
            return res.writeHead(200).end('Hello from the server');
            case '/contact-us':
                return res
                .writeHead(200)
                .end(
                    'Sure,Email : harshshukla24112000@gmail.com'
                );
    }
}
    break
    case 'POST':{
        switch(path){
            case '/tweet':
                return res.writeHead(201).end('Your tweet was created');
        }

    }

    
}

return res.writeHead(404).end('Youre Lost')
})

server.listen(8000 , () => console.log(` server is running on PORT 8000`))