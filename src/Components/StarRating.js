import React from 'react';
const StarRating = (props) => {
  

let rating = Math.floor(props.rating);
    return(
   
    <span>
        {[1,2,3,4,5].map(starelement => 
           <i className={`fa fa-star fa-1x ${starelement<=rating?'checked':''}`} id={"star"+starelement} aria-hidden="true"></i>
        )}
    </span>
);
 
}
export default StarRating;
