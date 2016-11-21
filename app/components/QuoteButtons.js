var React = require('react');

function QuoteButtons(props) {
	return (
		<div className="quote-buttons col-xs-12 col-sm-6">
			<button disabled={props.loading} className="btn btn-quote" onClick={props.onQuoteRequest}>New Quote</button>
			<a href="#" onClick={props.onTweetQuote}></a>							
		</div>
	)
}

QuoteButtons.propTypes = {
	onQuoteRequest: React.PropTypes.func.isRequired,
	onTweetQuote: React.PropTypes.func.isRequired,
	loading: React.PropTypes.bool.isRequired
};

module.exports = QuoteButtons;