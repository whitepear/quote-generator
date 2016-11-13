var React = require('react');
var Title = require('../components/Title.js');
var Loading = require('../components/Loading.js');
var QuoteText = require('../components/QuoteText.js');
var PastQuotes = require('../components/PastQuotes.js');
var QuoteButtons = require('../components/QuoteButtons.js');

var QuoteContainer = React.createClass({
	getInitialState: function() {
		return {
			loading: true
		}
	},
	render: function() {
		if (this.state.loading) {
			var quoteBoxContent = <Loading />;
		} else {
			quoteBoxContent = <QuoteText />;
		}

		return (
			<div className="row">				
				<div className="col-xs-12">
					<Title />					
					{quoteBoxContent}					
					<PastQuotes />
					<QuoteButtons />			
				</div>
			</div>
		)
	}
});

module.exports = QuoteContainer;