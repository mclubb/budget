var React = require('react');
var MasterLayout = require('./layout');

class CategoryComponent extends React.Component{
	render() {
                var b = this.props.categories.map( (category) =>
                            <tr key={category._id.toString()}>
                                <td>{category.category}</td>
                                <td><a href={'/category/edit/' + category._id.toString()}><i className="fa fa-edit"/></a></td>
                                <td><a href={'/category/delete/' + category._id.toString()}><i className="fa fa-trash"/></a></td>
                            </tr>
                );
		return (
			<MasterLayout>
                                <a href="/category/new">Add a Category</a>
                                <h2>Categories</h2>
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Category Name</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                {b}
                                    </tbody>
                                </table>
			</MasterLayout>
		)
	}
}

module.exports = CategoryComponent;
