function rentCassette(req, res) {
    res.send("Video cassette rented");
}

function returnCassette(req, res) {
    res.send("Video cassette returned");
}

module.exports = { rentCassette, returnCassette };