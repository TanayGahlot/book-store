import React from 'react';



const StarRating = (props) =>{
   if (props.rating===5){
    return (
        <span>
        <i className="fa fa-star fa-1x checked " id="star1" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked" id="star2" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked" id="star3" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked" id="star4" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked" id="star5" aria-hidden="true"></i>
        </span>
    ); 
   }
    else if(props.rating >=4 && props.rating <5 ){ return (
        <span>
        <i className="fa fa-star fa-1x checked" id="star1" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked" id="star2" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked" id="star3" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked" id="star4" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star5" aria-hidden="true"></i>
        </span>
    ); 
    }
    else if(props.rating >=3  && props.rating <4 ){ return (
        <span>
        <i className="fa fa-star fa-1x checked " id="star1" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked" id="star2" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked" id="star3" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star4" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star5" aria-hidden="true"></i>
        </span>
    ); 
        
    }
    else if(props.rating>=2 && props.rating <3 ){ return (
        <span>
        <i className="fa fa-star fa-1x checked" id="star1" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x checked " id="star2" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star3" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star4" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star5" aria-hidden="true"></i>
        </span>
    ); 
        
    }
    else if(props.rating >=1 && props.rating <2 )
    { return (
        <span>
        <i className="fa fa-star fa-1x checked" id="star1" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star2" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star3" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star4" aria-hidden="true"></i>
        <i className="fa fa-star fa-1x " id="star5" aria-hidden="true"></i>
        </span>
    ); 
}   
    else {
        return (
            <span>
            <i className="fa fa-star fa-1x " id="star1" aria-hidden="true"></i>
            <i className="fa fa-star fa-1x " id="star2" aria-hidden="true"></i>
            <i className="fa fa-star fa-1x " id="star3" aria-hidden="true"></i>
            <i className="fa fa-star fa-1x " id="star4" aria-hidden="true"></i>
            <i className="fa fa-star fa-1x  " id="star5" aria-hidden="true"></i>
            </span>
        ); 
      }  
    

    
}
export default StarRating;

