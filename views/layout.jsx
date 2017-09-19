var React = require('react');
var Navigation = require('./navigation');

class MasterLayout extends React.Component{
	render() {
		return(
			<html>
			<head>
                            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" crossorigin="anonymous" />
                            <script src="https://code.jquery.com/jquery-3.1.1.min.js" crossorigin="anonymous"></script>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" crossorigin="anonymous"></script>
                            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" crossorigin="anonymous"></script>
                            <link href="/css/font-awesome.min.css" rel="stylesheet"/>
                            <link href="/css/site.css" rel="stylesheet"/>
                            <script src="/js/site.js"></script>
			</head>
			<body>
                            <Navigation></Navigation>
			{this.props.children}
			</body>
			</html>
		)
	}
}

module.exports = MasterLayout;
