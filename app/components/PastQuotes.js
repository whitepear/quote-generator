var React = require('react');
	
function PastQuotes(props) {
	var key = 0;
	return (
		<div className="past-quotes col-sm-6 hidden-xs">
			<h1>Generated Quotes</h1>
			{props.pastQuotes.map(function(pastQuote) {
				return <div key={key++}>{pastQuote}</div>
			})}
		</div>
	) 
}

PastQuotes.propTypes = {
	pastQuotes: React.PropTypes.array.isRequired
};

module.exports = PastQuotes;