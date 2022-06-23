const axios = require('axios');
const fs = require('fs');
const path = require('path');

function downloadLink(extractedLinks){
    extractedLinks.map(async(link, index) => {
        let downloadsPath = path.resolve(__dirname, 'Snapmemories', link['fileName'])
        const response = await axios({
            method: 'GET',
            url: link['awsLink'],
            responseType: 'stream'
        })
        const save = response.data.pipe(fs.createWriteStream(downloadsPath));

        save.on('finish', () => {
            console.log('Successfully downloaded file!');
        })
    })
}

module.exports = downloadLink;