var React = require('react');
var Quote = require('../components/Quote.js');

var QuoteContainer = React.createClass({
	render: function() {
		return (
			<div class="row">
				<div class="col-xs-12">
					<Quote />
				</div>
			</div>
		)
	}
});

module.exports = QuoteContainer;