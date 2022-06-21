const axios = require('axios');
const express = require('express');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });
const app = express();

const extractAwsLink = require('./functions/extractAwsLink');
const createFileName = require('./functions/createFileName');

//temp
const port = 4000;


app.post('/upload_file', upload.single("memories"), (req, res) => {
    if(req.file.originalname != 'memories_history.json'){
        res.status(400);
    } else {
        const jsonString = String(req.file.buffer);
        const jsonFile = JSON.parse(jsonString);
        const downloads = jsonFile["Saved Media"];
        
        extractAwsLink(downloads);
        createFileName(downloads);

    }
    
})

app.get('/', (req, res) => {
    //When user downloads file
})


app.listen(port, () => {
    console.log(`listening on ${port}`);
})