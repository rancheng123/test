var origin_branch = 'dev';
var target_branch = 'qa1';


const chalk = require('chalk');
var exec = require('child_process').exec;
var path = require('path');
var shFile = path.resolve(__dirname,'../../businessDir/operationShell/merge.sh');







//
console.log('----------------------------  合并流程     开始 ------------------------------------------------')

//
exec('git checkout ' + target_branch, function(err,stdout,stderr){
    if(err) {
        console.log(' error:'+stderr);

        console.log('git checkout ' + target_branch + '失败');
    } else {
        console.log(stdout);
    }
});




