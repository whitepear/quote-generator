var axios = require('axios');

function quoteFetcher() {
	return axios.get('https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json');
}

module.exports = quoteFetcher;