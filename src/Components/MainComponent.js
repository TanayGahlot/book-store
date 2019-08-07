import React, { Component } from 'react';
import BookAppBody from './BookAppBodyComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {



  render() {




    return (
      <div>
        <div className="taskbody_background">
          <Header />
          <BookAppBody/>
          <br />
        </div>
        <Footer />
      </div>

    );
  }
}


export default Main;
