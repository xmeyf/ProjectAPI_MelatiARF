import React from 'react';
import Utama from './BrowserRouter/Utama';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';


class App extends React.Component {
  render(){
    return(
      <div  className="text-center">
        <div> <hr /> <br /><br /><br />
        <ul class="nav nav-tabs fixed-top">
          <li class="nav-item">
            <a className="nav-link active"><Link className="text-dark" to="/Home">Home</Link></a>
          </li>
          <li class="nav-item">
            <a className="nav-link active"><Link className="text-dark" to="/User">User</Link></a>
          </li>
          <li class="nav-item">
            <a className="nav-link active"><Link className="text-dark" to="/Product">Product</Link></a>
          </li>
          <li class="nav-item">
            <a className="nav-link active"><Link className="text-dark" to="/Form">Form</Link></a>
          </li>
          <li class="nav-item">
            <a className="nav-link active"><Link className="text-dark" to="/FormProduct">FormProduct</Link></a>
          </li>
          </ul>
        </div>
        <div>
          <Utama />
        </div>
        </div>
    )
  }
}

export default App;
