import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import PropTypes from 'prop-types';
// import Big from 'big.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Calculator Milestone 2</h1>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
