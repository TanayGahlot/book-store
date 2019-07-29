import React, { Component } from 'react';
import Book from './BookComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

  

  render() {
   

   
   
    return (
      <div>
      <div className="taskbody_background">
      <Header/>
      
      <Book/>

            
             
      <br/>
      </div>
      <Footer/>
      </div>
      
    );
  }
}


//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
export default Main;
