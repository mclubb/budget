var React = require('react');
var MasterLayout = require('./layout');

var IndexComponent = React.createClass({
	render: function() {
		return (
			<MasterLayout>
			<h2>Index Page in React</h2>
			</MasterLayout>
		)
	}
});

module.exports = IndexComponent;
