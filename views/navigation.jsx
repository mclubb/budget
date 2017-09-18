var React = require('react');

class Navigation extends React.Component{
	render() {
		return(
                    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active"> <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> </li>
                                <li className="nav-item"> <a className="nav-link" href="#">Link</a> </li>
                                <li className="nav-item"> <a className="nav-link disabled" href="#">Disabled</a> </li>
                                <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a> 
                                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li> 
                             </ul>
                                                                                                                                                                                                                            </div>
                    </nav>
		)
	}
}

module.exports = Navigation;
