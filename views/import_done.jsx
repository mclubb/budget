
var React = require('react');
var MasterLayout = require('./layout');

class ImportDoneComponent extends React.Component{
	render() {
		return (
			<MasterLayout>
                            <h2>Thank you for submitting your ledger file</h2>
			</MasterLayout>
		)
	}
}

module.exports = ImportDoneComponent;
