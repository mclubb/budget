var React = require('react');
var MasterLayout = require('./layout');

class CategoryNewComponent extends React.Component{
	render() {
		return (
			<MasterLayout>
                            <div className="container" style={{marginTop: `15px`}}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <form action="/category/new" method="post">
                                            <h2>Add a Category</h2>
                                            <input type="text" placeholder="Category"  name="category" className="form-control" /> 
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

module.exports = CategoryNewComponent;
