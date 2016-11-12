var React = require('react');

function Quote(props) {
	return (
		<div className="col-xs-12">
			<div className="title-container">
				<h1>Quote</h1>
				<h2>Generator</h2>
			</div>
			<div className="quote-container">
				<p>Hey, there.</p>
			</div>
			<div className="quote-buttons">
				<button className="btn btn-quote">New Quote</button>
				<a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>							
			</div>
			<div className="past-quotes"></div>
		</div>
	)
}

module.exports = Quote;