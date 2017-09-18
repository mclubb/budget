var React = require('react');
var MasterLayout = require('./layout');

class ImportComponent extends React.Component{
	render() {
		return (
			<MasterLayout>
                                <h2>Import Ledger File</h2>
                                <form action="/import" method="post">
                                <input type="file" name="ledgerfile" />
                                <button type="submit">Submit</button>
                                </form>
			</MasterLayout>
		)
	}
}

module.exports = ImportComponent;
