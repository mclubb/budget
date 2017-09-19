var React = require('react');

class BucketSelect extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        var bucketlist = this.props.buckets.map( (bucket) =>
    <option key={bucket._id.toString()}>{bucket.bucket}</option>
                );
        return (
            <select name="bucket" defaultValue={this.props.defaultValue}>
                <option>Choose One</option>
            {bucketlist}
            </select>
        );
    }
};

module.exports = BucketSelect;
