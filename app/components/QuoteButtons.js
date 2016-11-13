var React = require('react');

function QuoteButtons(props) {
	return (
		<div className="quote-buttons col-xs-12 col-sm-6">
			<button className="btn btn-quote">New Quote</button>
			<a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>							
		</div>
	)
}

module.exports = QuoteButtons;