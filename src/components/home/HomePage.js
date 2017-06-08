import {React,Component} from 'react';
import {Link} from 'react-router';
import App from '../App';

class HomePage extends Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Administration</h1>
        <p>React, Redux and React Router in ES6 for REACTJS Web App.</p>
        <link to="about" className="btn btn-primary btn-lg">Learn more</link>
      </div>
    );
  }
}

export default HomePage;
