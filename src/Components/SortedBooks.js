import React from 'react';
import sortJsonArray from 'sort-json-array';
import {ListGroupItem,ListGroup, Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle} from 'reactstrap';
import StarRating from './RenderStarRating';

const SortedBooks = (props) =>{
    var filtereddata = props.books.filter((book)=> {
        var myre = new RegExp('[a-zA-Z]');
        if(!myre.test(book.average_rating))
        {
            return book
        }

    }

    )
    var sortedData= sortJsonArray(filtereddata,'average_rating','des');
    console.log(sortedData);
    const books= sortedData.map((book) => {
    return (
//     <ListGroupItem key={book.id} className = "list-font"  >{book.title}
   
//    <p>Author: {book.authors} <br/>
//    ISBN: {book.isbn}</p>
//   </ListGroupItem>
    <div className="col-12 col-sm-6 col-md-4 text-left card-background">
    <Card key={book.id} className=" my-1 col-12 text-left card-height"> 
        <CardTitle  className="bookname"><small>{book.title}</small></CardTitle>
        <CardSubtitle className="author"> Author: {book.authors}</CardSubtitle>
        <CardBody>
        <p className="text-center">
                <strong>{book.price} INR</strong>
            </p>
        
        
        <em>Language Code: {book.language_code} </em>
        </CardBody>
        <CardFooter >
        < span className="text-left ratings">
                 <small> Ratings Count: {book.ratings_count}</small>
        </span>
        <span className="star-right ">
        <StarRating rating={book.average_rating}/> 
        {/* <i className="fa fa-star fa-1x align-middle " aria-hidden="true"></i>  */}
        {book.average_rating} </span>
        </CardFooter>
    </Card>
    </div>


        
            );
        });

    return (
        <div className="row">
            {books}
        </div>
    ); 
    }
export default SortedBooks;

