import React, { Component} from 'react';

class DisplayBooksSecondPart extends Component{
render(){
    return (
            <div className="row">
                        {this.props.books}
            </div>
            );
}
}

export default DisplayBooksSecondPart; 
// export const DisplayBooksSecondPart = (props) =>{
//     return (
//     <div className="row">
//                 {props.books}
//     </div>
//     );
//     } 
    