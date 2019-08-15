import React, { Component} from 'react';
class DisplayRemainingBooks extends Component{
render(){
    return (
            <div className="row">
                        {this.props.books}
            </div>
            );
}
}
export default DisplayRemainingBooks; 
