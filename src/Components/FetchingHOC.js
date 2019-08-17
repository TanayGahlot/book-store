import React,{Component} from 'react';
import { Loading } from './LoadingComponent';
const withFetching = (url,WrappedComponent) => {
return class  extends Component {
  
    state = {
      data: [],
      isLoading: false,
      error: null,
    };
  
    toggleLoader= () => this.setState(prevState => ({isLoading: !prevState.isLoading}));

    componentDidMount() {
      this.toggleLoader();
        fetch(url)
             .then(response => response.json())
             .then(result => {this.setState({ data: result});this.toggleLoader();})
             .catch(error => {this.setState({ error});this.toggleLoader();});
    
}
  render() {
    if (this.state.isLoading) {
      return (
          <div className="container">
              <div className="row">
                  <Loading />
              </div>
          </div>
      );
  }
  else if (this.state.error) {
      return (
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h4>{this.state.error.message}</h4>
                  </div>
              </div>
          </div>
      );
  }
  else
    return <WrappedComponent data={this.state.data}/>;
  }
}
}

export default withFetching;