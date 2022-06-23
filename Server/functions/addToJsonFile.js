const fs = require('fs');

function addToJsonFile(awsLinkJson){
    fs.writeFile(__dirname + '/aws.json', JSON.stringify(awsLinkJson), err => {
        if(err) throw err;
    })
}

module.exports = addToJsonFile;