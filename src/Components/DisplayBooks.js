import React, { lazy, Suspense } from 'react';
import { Card, CardBody, CardFooter, CardTitle, CardSubtitle } from 'reactstrap';
import StarRating from './RenderStarRating';
const DisplayBooksSecondPart = lazy(() => import('./DisplayBooksSecondPart'), 'default')

function bookDisplayCards(book) {

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
                        <StarRating rating={book.average_rating} />
                        {/* <i className="fa fa-star fa-1x align-middle " aria-hidden="true"></i>  */}
                        {book.average_rating} </span>
                </CardFooter>
            </Card>
        </div>




    );
}

const DisplayBooks = (props) => {

    var books1to12 = props.books.slice(0, 12);
    var booksRest = props.books.slice(12, props.books.length);
    var books1 = books1to12.map(bookDisplayCards);
    var books2 = booksRest.map(bookDisplayCards);

    return (
        <React.Fragment>
            
            
                {books1}
           

            <Suspense fallback={<h3>Still Loading…</h3>}>
                <DisplayBooksSecondPart books={books2} />
            </Suspense>
        </React.Fragment>
    );
}
export default DisplayBooks;

