var React = require('react');
var MasterLayout = require('./layout');

class BucketsComponent extends React.Component{
	render() {
                var b = this.props.buckets.map( (bucket) =>
                            <tr>
                                <td>{bucket.category}</td>
                                <td>{bucket.bucket}</td>
                                <td className="right_align">{bucket.budget}</td>
                                <td className="right_align">{bucket.actual}</td>
                                <td className="right_align">{bucket['in savings']}</td>
                                <td className="right_align">{bucket['to savings']}</td>
                                <td className="right_align">{bucket['next month savings']}</td>
                            </tr>
                );
		return (
			<MasterLayout>
                                <h2>Buckets</h2>
                                <table>
                                    <tr>
                                        <th>Category</th>
                                        <th>Bucket Name</th>
                                        <th className="right_align">Budget</th>
                                        <th className="right_align">Actual</th>
                                        <th className="right_align">To Savings</th>
                                        <th className="right_align">In Savings</th>
                                        <th className="right_align">Next Month Savings</th>
                                    </tr>
                                {b}
                                </table>
			</MasterLayout>
		)
	}
}

module.exports = BucketsComponent;
