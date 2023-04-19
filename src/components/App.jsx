import { Component } from 'react';
// import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = index => {
    // console.log(value);

    this.setState(prevState => {
      const updateState = `${Object.keys(prevState)[index]}: ${
        Object.values(prevState)[index] + 1
      }`;

      this.state = updateState;
    });

    console.log(this.state);
  };

  // handleIncrement = index => {
  //   this.setState(prevState => {
  //     const key = Object.key(prevState)[index];
  //     const value = Object.values(prevState)[index];
  //     console.log(key);
  //     // return {Object.keys(this.state)[index]};
  //   });
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const total = 0;
    const positivePercentage = 0;
    const options = Object.keys(this.state);

    // console.log(options);
    // {
    // Object.keys(options).map((option, index) => {
    //     console.log(option);
    //     return <button key={option}>{option}</button>;
    //     // return <div key={options}></div>;
    //     return option;
    //   })}

    // const feedbackOptionsTitle = 'Pleas leave feedback';
    // const statisticsTitle = 'Statistics';

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
        <div>
          {options.map((option, index) => {
            return (
              <button
                key={option}
                type="button"
                onClick={() => this.handleIncrement(index)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </>
    );
  }
}
