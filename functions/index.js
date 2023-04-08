const functions = require('firebase-functions');
const axios = require('axios');

exports.steamProxy = functions.https.onRequest(async (req, res) => {
    const url = 'https://api.steampowered.com' + req.url;
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
