import React, { Component, Suspense, lazy } from 'react';
import { Loading } from './LoadingComponent';
import { Input, Form, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchBooks } from '../redux/ActionCreators';
import DisplayBooks from './DisplayBooks';
import sortJsonArray from 'sort-json-array';


const mapStateToProps = state => {
    return {
        books: state.books,

    }
}

const mapDispatchToProps = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks()),
});

class BookAppBody extends Component {
    constructor(props) {
        super(props);

        this.state = {

            sorted: false
        };
        this.handlesort = this.handlesort.bind(this);

    }

    handlesort() {
        this.setState({
            sorted: true
        });
    }
    componentDidMount() {

        this.props.fetchBooks();

    }


    render() {

        var filtereddata = this.props.books.books.filter((book) => {
            var myre = new RegExp('[a-zA-Z]');
            if (!myre.test(book.average_rating)) {
                return book;
            }

        }

        )
        var sortedData = sortJsonArray(filtereddata, 'average_rating', 'des');

        if (this.props.books.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (this.props.books.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{this.props.books.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">

                        <div className="col-10 col-sm-10 col-md-12">
                            <Form inline>
                                <Input type="text" placeholder="Search" className="col-10 col-sm-10 col-md-10" />
                                <Button variant="outline-success" className="col-2 col-sm-2 col-md-2">Search</Button>

                            </Form>
                            <br />

                        </div>

                    </div>
                    <div className="row">
                        <Button className="col-10 col-sm-10 col-md-12" outline onClick={this.handlesort} type="submit" color="secondary">
                            <span className="fa fa-sort fa-lg"></span>
                            Sort based on Average ratings (High to Low)
                        </Button>
                        <br />
                    </div>
                    {
                        this.state.sorted ? (<DisplayBooks books={sortedData} />) : (<DisplayBooks books={this.props.books.books} />)
                    }
                   


                </div>

            );

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(BookAppBody);

