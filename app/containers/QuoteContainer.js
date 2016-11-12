var React = require('react');
var Quote = require('../components/Quote.js');

var QuoteContainer = React.createClass({
	render: function() {
		return (
			<div className="row">				
				<Quote />				
			</div>
		)
	}
});

module.exports = QuoteContainer;