import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/Calculate';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (clickedButton) => {
    this.setState(Calculate(this.state, clickedButton));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="app">
        <header>
          <h1 className="main-title">Calculator Milestone 3</h1>
        </header>
        <div className="calculator-body">
          <Display result={next ? next : total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
