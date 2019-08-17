import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import DisplayBooks from './DisplayBooks';
import { baseUrl } from '../shared/baseUrl';
import withFetching from './FetchingHOC';
class BookAppBody extends Component {
    state={
        books:this.props.data
    }
      
    handleSort = () => 
     this.setState({books: this.state.books.filter(book => {
        
        if (!RegExp('[a-zA-Z]').test(book.average_rating)) {
            return book;
        }
    }
    ).sort(function(a,b){
            return b.average_rating-a.average_rating
        })})
  
    render() {
        
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    
                    <Input className="col-12" type="text" placeholder="Search Books" />
                
                    
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
                <DisplayBooks books={this.state.books} /> 
                </div>
            </div>
            </React.Fragment>
        );
    }
}
export default withFetching(baseUrl,BookAppBody);
