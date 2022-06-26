const express = require('express');
const multer = require('multer');
const cors = require('cors');
const zipLocal = require('zip-local');
const upload = multer({ storage: multer.memoryStorage() });
const app = express();


const extractAwsLink = require('./functions/extractAwsLink');
const downloadLink = require('./functions/downloadLink');

const port = 4000;

app.use(cors());

//trying to save as little files as possible to server
app.all('/upload_file', upload.single("memories"), (req, res) => {
    if(req.file.originalname != 'memories_history.json'){
        res.sendStatus(400);
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
                res.sendStatus(200);
            } catch(err){
                console.log(err);
            }
        }
        main();
        //res.status(200);
    }
})

app.get('/download', (req, res) => {
    zipLocal.sync.zip('./functions/Snapmemories').save("my-memories.zip");
    res.download(__dirname + '/my-memories.zip');
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
})