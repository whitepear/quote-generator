var axios = require('axios');

function quoteFetcher() {
	var currentTimestamp = Date.now().toString(); // appended to url below, in order to prevent browser caching of API response
	return axios.get('https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&foo=' + currentTimestamp);
}

module.exports = quoteFetcher;