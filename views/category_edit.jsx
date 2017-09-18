var React = require('react');
var MasterLayout = require('./layout');

class CategoryEditComponent extends React.Component{
	render() {
		return (
			<MasterLayout>
                            <div className="container" style={{marginTop: `15px`}}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <form action={this.props.category[0] ? "/category/edit/" + this.props.category[0]._id.toString() : ""} method="post">
                                            <h2>Edit Category</h2>
                                            <input type="text" placeholder="Category" defaultValue={this.props.category[0] ? this.props.category[0].category : ""}  name="category" className="form-control" /> 
                                            <br/>
                                            <button type="submit" className="btn btn-lg btn-block btn-primary form-control">Submit</button> 
                                        </form>
                                    </div>
                                </div>
                            </div>
			</MasterLayout>
		)
	}
}

module.exports = CategoryEditComponent;
