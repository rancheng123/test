var origin = 'dev';
var target = 'qa';



var exec = require('child_process').exec;
var path = require('path');
var shFile = path.resolve(__dirname,'../../businessDir/operationShell/merge.sh');

exec('sh '+ shFile + ' '+ origin +' ' + target, function(err,stdout,stderr){
    if(err) {
        console.log('get weather api error:'+stderr);
    } else {
        console.log(stdout);
    }
});
