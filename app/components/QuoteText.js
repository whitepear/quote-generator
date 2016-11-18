var React = require('react');

function QuoteText(props) {
	return (
		<div className="quote-text-box">
			<p className="quote-content">{props.quoteData.quoteText}</p>
			<p className="quote-author">— {props.quoteData.quoteAuthor}</p>
		</div>
	)
}

QuoteText.propTypes = {
	quoteData: React.PropTypes.object.isRequired
};

module.exports = QuoteText;