var React = require('react');
// Components
var Title = require('../components/Title.js');
var Loading = require('../components/Loading.js');
var QuoteText = require('../components/QuoteText.js');
var PastQuotes = require('../components/PastQuotes.js');
var QuoteButtons = require('../components/QuoteButtons.js');
// Utils
var quoteFetcher = require('../utils/quoteFetcher.js');

var QuoteContainer = React.createClass({
	getInitialState: function() {
		return {
			loading: true,
			quote: {},
			error: false
		}
	},
	componentDidMount: function() {
		this.handleQuoteFetch();
	},
	handleQuoteFetch: function() {
		quoteFetcher()
		.then(function(quoteData) {					

			// sometimes the API returns a stringified JSON object, instead of actual JSON	
			if (typeof quoteData.data === 'string') {
				if (quoteData.data.match(/"/g).length > 20) {
					// the quote field value contains nested, unescaped double-quotes
					// hit the API again, as this is a rare and unusual API response
					console.log('More than 20 double-quotes in string. Requesting new quote...');
					return this.handleQuoteFetch();
				} else {					
					// Remove control characters and backslashes
					quoteData.data = quoteData.data.replace(/[^ \w-,'"\.;:?+=*—\(\)&!\/{}]/g, "");
					quoteData.data = JSON.parse(quoteData.data);					
				}				
			}

			if (quoteData.data.quoteAuthor.length === 0) {
				quoteData.data.quoteAuthor = 'Anonymous';
			}
			
			this.setState({
				loading: false,
				quote: quoteData.data
			});
		}.bind(this))
		.catch(function(err) {
			console.log(err);
			this.setState({
				loading: false,
				error: true
			});
		}.bind(this));
	},
	render: function() {
		return (
			<div className="row">				
				<div className="col-xs-12">
					<Title />					
					{this.state.loading ? <Loading /> : <QuoteText quoteData={this.state.quote}/>}					
					<PastQuotes />
					<QuoteButtons />			
				</div>
			</div>
		)
	}
});

module.exports = QuoteContainer;