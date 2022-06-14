const https = require("https");
const fs = require("fs");
const path = require('path');
const axios = require('axios');

//When getting the file

const jsonFile = './memories_history.json';

const downloads = require(jsonFile)["Saved Media"];

async function getLinks(){
    //let linksArray = []
    for(var i=0; i < downloads.length; i++){
        const fileTime = downloads[i]["Date"] //temp for now;
        const fileName = createFileName(downloads[i], fileTime);
        const fileUrl = downloads[i]["Download Link"];
        const localFilePath = path.resolve(__dirname, 'Test', fileName);
        try{
            const response = await axios({
                method: 'GET',
                url: fileUrl,
                responseType: 'stream'
            })
            const write = response.data.pipe(fs.createWriteStream(localFilePath));
            write.on('finish', () => {
                console.log('Successfully downloaded file!');
              });
        } catch (err){
            throw new Error(err);
        }
    }
}

function createFileName(download, fileTime){
    var fileName = fileTime
    if(download["Media Type"].toLowerCase() == "image" || download["Media Type"].toLowerCase() == "photo"){
        fileName += ".jpg"
    } else if(download["Media Type"].toLowerCase() == "video"){
        fileName += ".mp4"
    }
    return fileName;
}

getLinks();
