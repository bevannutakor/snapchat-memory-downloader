const https = require("https");
const fs = require("fs");

const jsonFile = './memories_history.json';

const downloads = require(jsonFile)["Saved Media"];

function main(){
    for(var i=0; i < downloads.length; i++){
        const fileTime = downloads[i]["Date"] //temp for now;
        const fileName = createFileName(downloads[i], fileTime);
        const [url, body] = downloads[i]["Download Link"].split("?", 2);
        getCDNLink(url, body, fileName, fileTime);
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

function getCDNLink(url, body, fileName, fileTime){
    var parsedUrl = new URL(url);
    const options = {
        hostname: parsedUrl.hostname,
        path: parsedUrl.pathname,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    }
}

main();
