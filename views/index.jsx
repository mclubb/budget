var React = require('react');
var MasterLayout = require('./layout');

class IndexComponent extends React.Component{
    //state = { 'categories':[] };
    constructor(props) {
        super(props);

        var categories = [];
        props.buckets.forEach( function(bucket, index, arr) { 
            categories.push(bucket.category);
        });

        categories = categories.filter(function(value, index, arr) {
            return index === categories.indexOf(value);
        });
        this.state = {'categories': categories};
    }

    render() {
            var b = this.state.categories.map( (category) =>
                    <li>{category}</li>
            );
            return (
                    <MasterLayout>
                    <div className="jumbotron">
                        <div className="container">
                            <h2>Dashboard</h2>
                            <a href="/buckets">View all buckets</a>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row category_row">
                            <div className="col-md-4 category_card"><h2>Giving</h2><i className="fa fa-gift fa-5" /></div>
                            <div className="col-md-4 category_card"><h2>Saving</h2><i className="fa fa-money fa-5" /></div>
                            <div className="col-md-4 category_card"><h2>Housing</h2><i className="fa fa-home fa-5" /></div>
                        </div>
                        <div className="row category_row">
                            <div className="col-md-4 category_card"><h2>Transportation</h2><i className="fa fa-car fa-5" /></div>
                            <div className="col-md-4 category_card"><h2>Living</h2><i className="fa fa-heart fa-5" /></div>
                            <div className="col-md-4 category_card"><h2>Commitments</h2><i className="fa fa-credit-card-alt fa-5" /></div>
                        </div>
                    </div>
                    </MasterLayout>
            )
    }
}

module.exports = IndexComponent;
