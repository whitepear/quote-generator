var React = require('react');
var ReactDOM = require('react-dom');
var QuoteContainer = require('./containers/QuoteContainer.js');
require('./public/styles/app.scss');

ReactDOM.render(
	<QuoteContainer />,
	document.getElementById('app')
);