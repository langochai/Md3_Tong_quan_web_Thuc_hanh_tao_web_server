const http = require('http')
const server = http.createServer((req,res)=>{
    res.write('<h1>Bullshiet!</h1><hr>')
    res.end()
})
server.listen(8000,'localhost')