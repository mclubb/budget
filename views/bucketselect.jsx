var React = require('react');

class BucketSelect extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        var bucketlist = this.props.buckets.map( (bucket) =>
    <option>{bucket.bucket}</option>
                );
        return (
            <select name="bucket">
                <option>Choose One</option>
            {bucketlist}
            </select>
        );
    }
};

module.exports = BucketSelect;
