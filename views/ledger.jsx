var React = require('react');
var MasterLayout = require('./layout');
var BucketSelect = require('./bucketselect.jsx');

class LedgerComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {'items': props.items}
    }

    render() {
        var records = this.state.items.map( (record) => 
            <tr key={record._id.toString()} id={record._id.toString()}>
                <td>{new Date(record.date).toLocaleDateString('en-US', {'timeZone':'UTC'})}</td>
                <td>{record.desc}</td>
                <td>{record.amount}</td>
                <td><BucketSelect buckets={this.props.buckets} defaultValue={record.bucket}/></td>
            </tr>
        );
            return (
                    <MasterLayout>
                    <div className="container">
                        <div className="row">
                            <table>
                                <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Bucket</th>
                                </tr>
                                </thead>
                                <tbody>
                                {records}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </MasterLayout>
            )
    }
}


module.exports = LedgerComponent;
