var axios = require('axios');

function shortenUrl(url) {
	var fullUrl = 'https://crossorigin.me/https://api-ssl.bitly.com/v3/shorten?access_token=REDACTED&longUrl=' + url;
	return axios.post(fullUrl);
}

module.exports = shortenUrl;