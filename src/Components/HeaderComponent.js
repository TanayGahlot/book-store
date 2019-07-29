import React from 'react';
import {  Jumbotron } from 'reactstrap';
//import {NavLink} from 'react-router-dom';
 
const Header = ()=>
    {
        return(
            <React.Fragment>
                
                <Jumbotron className="bg-primary text-white text-left">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-8">
                            <h1  className="book-main-title">Book Repo-the best books online.</h1>
                            
                            </div>

                        </div>
                    </div>
                </Jumbotron>
                
            </React.Fragment>
        );

    }

export default Header;
