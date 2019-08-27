import React from 'react';
import { Card, CardBody, CardFooter, CardTitle, CardSubtitle } from 'reactstrap';
import StarRating from './StarRating';
export const DisplayBookCard = (book) => {

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
                    
                        {book.average_rating} </span>
                </CardFooter>
            </Card>
        </div>




    );
}
