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
			pastQuotes: []
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
				quote: {
					quoteText: 'An error occurred during quote generation. Please try again.',
					quoteAuthor: ''
				}
			});
		}.bind(this));
	},
	handleQuoteRequest: function() {
		var pastQuotes = this.state.pastQuotes;
		var currentQuote = this.state.quote.quoteText;

		if (pastQuotes.length === 3) {
			pastQuotes.pop();
		}
		
		if (currentQuote.length > 115) {
			currentQuote = currentQuote.slice(0, 112) + '...';
		}

		pastQuotes.unshift(currentQuote);

		this.setState({
			loading: true,
			pastQuotes: pastQuotes
		});
		this.handleQuoteFetch();
	},
	handleTweetQuote: function() {
		var currentQuote = this.state.quote.quoteText.replace(/;/g, '%3B'); // encode semi-colons for query-string
		var twitterUrl = "https://twitter.com/intent/tweet?text=";

		if (currentQuote.length > 140) {
			var characterCount = 140 - 23; // the tweet will include a link to the quote; links are always 23 characters long
			var quoteSnippet = currentQuote.slice(0, characterCount - 4) + '... ';
			location.href = twitterUrl + quoteSnippet + this.state.quote.quoteLink;		  	
		} else {
			location.href = twitterUrl + currentQuote;
		}			
	},
	render: function() {
		return (
			<div className="row">				
				<div className="col-xs-12">
					<Title />					
					{this.state.loading ? <Loading /> : <QuoteText quoteData={this.state.quote}/>}					
					<PastQuotes pastQuotes={this.state.pastQuotes} />
					<QuoteButtons 
						loading={this.state.loading} 
						onQuoteRequest={this.handleQuoteRequest} 
						onTweetQuote={this.handleTweetQuote} />			
				</div>
			</div>
		)
	}
});

module.exports = QuoteContainer;