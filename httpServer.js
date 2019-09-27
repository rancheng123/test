var opts = {
    host: getIPAdress(),
    port: 8080
}


const http = require('http');


var server = http.createServer(function (req, res) {

    console.log('someone accessed')
});
server.listen(opts.host,opts.port,()=>{
    console.log('server is listening on http://'+ opts.host +':' + opts.port)
});



function getIPAdress(){
    var interfaces = require('os').networkInterfaces();
    for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
}