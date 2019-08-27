import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
//import DisplayBooks from './DisplayBooks';
import DisplayBooksList from './DisplayBooksList';
import { baseUrl } from '../shared/baseUrl';
import withFetching from './FetchingHOC';
//import PaginationBooks from './Pagination';
import PaginationComponent from 'react-reactstrap-pagination';

function searchingFor(term){
    return function(x){
      return x.title.toString().toLowerCase().includes(term.toLowerCase()) || 
          x.authors.toString().toLowerCase().includes(term.toLowerCase()) || !term ;
        
    };
}
class BookAppBody extends Component {
    state={
        books:this.props.data,
        term:'',
        currentPage:1,
        booksPerPage:10

    }
      
    handleSort = () => 
     this.setState({books: this.state.books.filter(book => {
        if (!RegExp('[a-zA-Z]').test(book.average_rating)) {
            return book;
        }
    }).sort(function(a,b){
           return b.average_rating-a.average_rating
        })})
    
    handleSearch =(event) =>this.setState({term: event.target.value, currentPage : 1});
        
    paginate = (pageNumber) => this.setState({currentPage: pageNumber})

    render() {
        const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
        const indexOfFirstBook= indexOfLastBook - this.state.booksPerPage;
        const filteredBooks=this.state.books.filter(searchingFor(this.state.term))
        const currentbooks = filteredBooks.slice(indexOfFirstBook,indexOfLastBook);
      
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                   
                    <Input className="col-12" type="text" placeholder="Search Books" value={this.state.term} onChange={this.handleSearch} />
                    
                    
                </div>
                <div className="row">
                    <Button className="col-12" outline onClick={this.handleSort} type="submit" color="secondary">
                        <span className="fa fa-sort fa-lg">
                        Sort based on Average ratings (High to Low)
                        </span>
                        </Button>
                    <br />
                </div>
            
              
               <div className="row">
              
                <DisplayBooksList books={currentbooks} term={this.state.term}/>
                </div>
                <div className="row">

                <PaginationComponent id="pagination-bar"
                totalItems={filteredBooks.length}
                pageSize={this.state.booksPerPage} 
                maxPaginationNumbers={10}
                onSelect={(pageNumber)=>this.paginate(pageNumber)}
                activePage={this.state.currentPage}
                />
               </div>
            </div>
            </React.Fragment>
        );
    }
}
export default withFetching(baseUrl,BookAppBody);
