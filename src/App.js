import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';

import axios from 'axios';

export class App extends Component {


  componentDidMount() {

    axios.get('https://api.covid19api.com').then(
      response => {
        console.log('res--', response);
      }
    )
    axios.get('https://api.covid19api.com/countries').
    then( response => {
      console.log('res', response);
    });
  }

  render() {
    return (
      <div>
        <Layout>
          <Dashboard />
        </Layout>
      </div>
    )
  }

}


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React1
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
