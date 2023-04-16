import { Component } from 'react';
import Section from './Section';

export class App extends Component {
  state = {
    good: 1,
    neutral: 2,
    bad: 3,
  };

  render() {
    return <Section state={this.state} title="Pleas leave feedback" />;
  }
}
