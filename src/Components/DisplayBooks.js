import React, {lazy,Suspense } from 'react';
import {ListGroupItem,ListGroup, Card, CardBody, CardHeader, CardFooter, CardTitle, CardSubtitle} from 'reactstrap';
import StarRating from './RenderStarRating';
//const DisplayBooksSecondPart = React.lazy(()=> import('./DisplayBooksSecondPart'));
const DisplayBooksSecondPart = lazy(() => import('./DisplayBooksSecondPart'),'default')
function book_display_cards(book){
        
    return (

    <div className="col-12 col-sm-6 col-md-4 text-left card-background">
    <Card className=" my-1 col-12 text-left card-height"> 
        <CardTitle key={book.id} className="bookname"><small>{book.title}</small></CardTitle>
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
}

const DisplayBooks = (props) =>{
    
    var books1to12=[];
    var booksRest=[];
    for ( var i=0; i<12; i++ )
    {
        books1to12.push(props.books[i]);
    }
    for (var i=12 ; i< props.books.length ; i++ )
    {
        booksRest.push(props.books[i]);
    }
   
    var books1= books1to12.map(book_display_cards);
    var books2=booksRest.map(book_display_cards);
    
    return (
        <div>
        <div className="row">
            {books1}
        </div>
        
        
        <Suspense fallback={<h3>Still Loading…</h3>}>
        <DisplayBooksSecondPart books={books2}/>
       
        </Suspense>
        </div>
    ); 
    }
export default DisplayBooks;

