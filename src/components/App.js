import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/Calculate';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="app">
        <header>
          <h1 className="main-title">Calculator Milestone 3</h1>
        </header>
        <div className="calculator-body">
          <Display result={result} />
          <ButtonPanel />
        </div>
      </div>
    );
  }
}

export default App;
