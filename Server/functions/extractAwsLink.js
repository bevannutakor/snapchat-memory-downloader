const axios = require('axios');

async function extractAwsLink(downloads){
    axios.defaults.timeout = 10000;
    let linksArray = [];
    await Promise.all(
        downloads.map(async (memory, index) => {
            let fileName = createFileName(memory);
            await axios.post(memory['Download Link'])
                .then(res => {
                    linksArray.push({'fileName':fileName ,'awsLink': res.data});
                })
                .catch(err => {
                    console.error(err);
                })
        })
    )

    //addtoJsonFile(linksArray);
    return await linksArray;
}

module.exports = extractAwsLink;
