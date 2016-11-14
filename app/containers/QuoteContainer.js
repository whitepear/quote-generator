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
		this.fetchQuote();
	},
	fetchQuote: function() {
		quoteFetcher()
		.then(function(quoteData) {
			this.setState({
				loading: false,
				quote: quoteData
			});
		}.bind(this))
		.catch(function() {
			this.setState({
				loading: false,
				error: true
			});
		}.bind(this));
	},
	render: function() {
		console.log(this.state);
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