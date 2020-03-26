import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/Calculate';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = clickedButton => {
    this.setState(Calculate(this.state, clickedButton));
  }

  renderDisplay = values => {
    const { total, next, operation } = values;
    if (!total && !next && !operation) return '0';
    return `${total ? total : ""} ${operation ? operation : ""} ${next ? next : ""}`;
  }


  render() {
    return (
      <div className="app">
        <header>
          <h1 className="main-title">Calculator Milestone 3</h1>
        </header>
        <div className="calculator-body">
          <Display result={this.renderDisplay(this.state)} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
