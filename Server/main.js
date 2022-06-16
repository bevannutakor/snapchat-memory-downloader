const fs = require("fs");
const path = require('path');
const axios = require('axios');

//When getting the file

const jsonFile = './memories_history.json';

const downloads = require(jsonFile)["Saved Media"];

function addLinkToFile(jsonData){
    fs.writeFile(__dirname + '/test.json', JSON.stringify(jsonData), err => {
        if (err) throw err
        else console.log('nice');
      })
}
//Extract aws link from app.snapchat.com
async function extractAwsLink(){
    let linksArray = [];
    axios.defaults.timeout = 10000;
    await Promise.all(
        downloads.map(async (memory, index) => {
            await axios.post(memory['Download Link'])
                .then(res => {
                    linksArray.push({'awsLink': res.data});
                })
                .catch(err => {
                    console.error(err);
                })
        })
    )
    addLinkToFile(linksArray);
}

function createFileName(download, fileTime){
    let fileName = fileTime
    if(download["Media Type"].toLowerCase() == "image" || download["Media Type"].toLowerCase() == "photo"){
        fileName += ".jpg"
    } else if(download["Media Type"].toLowerCase() == "video"){
        fileName += ".mp4"
    }
    return fileName;
}

async function main(){
    //loop through each aws link, and create a new file and add it to downloads
    //then send it to the user
    return null;
}