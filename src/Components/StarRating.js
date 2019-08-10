import React from 'react';
const StarRating = (props) => {
  
let starElements =[];
let rating = Math.floor(props.rating);
    
for ( var i=1 ; i<=5; i++){
     starElements.push(
    
       
           <i className={`fa fa-star fa-1x ${i<=rating?'checked':''}`} id={"star"+i} aria-hidden="true"></i>
     ) 
    }
return(
    <span>
        {starElements}
    </span>
);
 
}
export default StarRating;
