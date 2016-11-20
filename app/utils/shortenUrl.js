var axios = require('axios');

function shortenUrl(url) {
	var fullUrl = 'https://api-ssl.bitly.com/v3/shorten?access_token=d1336ada598bd70570ff94eaa75264ecd8d4da98&longUrl=' + url;
	return axios.get(fullUrl);
}

module.exports = shortenUrl;