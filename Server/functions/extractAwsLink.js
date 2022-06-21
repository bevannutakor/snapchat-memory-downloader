const axios = require('axios');

async function extractAwsLink(downloads){
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
    console.log(linksArray)
}

module.exports = extractAwsLink;