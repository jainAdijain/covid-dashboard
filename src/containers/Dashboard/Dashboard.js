import  React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Card from '../../components/Card/Card';


class Dashboard extends Component {

  render() {
    return (
      <Aux>
        <Card />
        <div>Covid Cases2</div>
      </Aux>
    );
  }
}


export default Dashboard;
