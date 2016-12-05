var React = require('react');

function Title(props) {
	return (
		<div>
			<div className="non-mobile-title hidden-xs">
				<h1>Quote</h1>
				<h2>Generator</h2>
			</div>
			<div className="mobile-title visible-xs">
				<div>Quotes!</div>
			</div>
		</div>
	)
}

module.exports = Title;