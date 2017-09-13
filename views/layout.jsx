var React = require('react');

var MasterLayout = React.createClass({
	render: function() {
		return(
			<html>
			<head>
			</head>
			<body>
			{this.props.children}
			</body>
			</html>
		)
	}
});

module.exports = MasterLayout;
