import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Card.module.css';

const card = () => (

  <Aux>
    <div className={classes.FlipCard}>
      <div className={classes.FlipCardInner}>
        <div className={classes.FlipCardFront}>
        </div>
        <div className={classes.FlipCardBack}>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  </Aux>

)

export default card;
