function createFileName(download){
    let fileName = download['Date'];
    if(download["Media Type"].toLowerCase() == "image" || download["Media Type"].toLowerCase() == "photo"){
        fileName += ".jpg"
    } else if(download["Media Type"].toLowerCase() == "video"){
        fileName += ".mp4"
    }
    return fileName;
}

module.exports = createFileName;