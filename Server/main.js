const express = require('express');
const multer = require('multer');
//const path = require('path');
const zipLocal = require('zip-local');
const upload = multer({ storage: multer.memoryStorage() });
const app = express();


const extractAwsLink = require('./functions/extractAwsLink');
const downloadLink = require('./functions/downloadLink');

const port = 4000;

//trying to save as little files as possible to server
app.all('/upload_file', upload.single("memories"), (req, res) => {
    if(req.file.originalname != 'memories_history.json'){
        res.status(400);
    } else {
        const jsonString = String(req.file.buffer);
        const jsonFile = JSON.parse(jsonString);
        const downloads = jsonFile["Saved Media"];

        //helper function to resolve promise
        async function main(){
            let extractedLinks;
            try{
                extractedLinks = await extractAwsLink(downloads);
                downloadLink(extractedLinks);
                //problem zip is always empty
                //await zipLocal.sync.zip('./functions/Snapmemories').save("my-memories.zip");
            } catch(err){
                console.log(err);
            }
        }
        main();
    }
})



app.listen(port, () => {
    console.log(`listening on ${port}`);
})