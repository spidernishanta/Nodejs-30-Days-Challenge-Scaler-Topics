const fs = require('fs')

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err)=>{
        if(err){
            console.log('Error in writing to file' + `${err.message}`);
        }
        else{
            console.log('Content written successfully to '+ `${filePath}`);
        }
    });
}

writeToFile('test-files/output1.txt', 'Sample content.');
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');