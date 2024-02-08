const ec = require('child_process');

function executeCommand(command) {
    ec.exec(command, (err, stdout, stderr)=>{
        if(err){
            console.log(`${err}`);
        }
        if(stderr){
            console.log(`${stderr}`);
        }
        console.log(`${stdout}`);
    });
}

executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');