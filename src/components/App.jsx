import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = index => {
    this.setState(prevState => {
      const prevStateKeys = `${Object.keys(prevState)[index]}:`;
      const prevStateValues = Object.values(prevState)[index];
      const updateState = `${prevStateKeys}: ${prevStateValues + 1}`;
      console.log(updateState);
      return { updateState };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = 0;
    const positivePercentage = 0;
    const options = Object.keys(this.state);

    return (
      <>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleIncrement}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}
