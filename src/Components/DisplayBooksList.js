import React from 'react';
import {ListGroup,ListGroupItemHeading,ListGroupItemText,ListGroupItem} from 'reactstrap';
import StarRating from './StarRating';
const DisplayBooksList = (props) => {
  
    return(
        <ListGroup className="col-12">
            {props.books.filter(
                (book)=> {if( !props.term ||
         book.title.toString().toLowerCase().includes(props.term.toLowerCase()) || 
         book.authors.toString().toLowerCase().includes(props.term.toLowerCase()) || 
         book.title.toString().toLowerCase().includes(props.term.toLowerCase()))
            
             return book;
             }
            ).map((book) => {return(
                <ListGroupItem key={book.id} >
                    <ListGroupItemHeading>{book.title}</ListGroupItemHeading>
                    <ListGroupItemText> Author: {book.authors} </ListGroupItemText>
                        <StarRating 
                        rating={book.average_rating}
                         />
                        {book.average_rating} 
                        
                </ListGroupItem>
            );}

            )}
        </ListGroup>
    ) 
   

}
export default DisplayBooksList;

