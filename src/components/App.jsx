import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
  state = {
    buttons: { good: 0, neutral: 0, bad: 0 },
    total: 0,
    positivePercentage: 0,
  };

  handleIncrement = buttonClickName => {
    this.setState(
      prevState => ({
        buttons: {
          ...prevState.buttons,
          [buttonClickName]: prevState.buttons[buttonClickName] + 1,
        },
      }),
      this.countTotalFeedback,
      this.countPositiveFeedbackPercentage
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.buttons;
    this.setState(
      { total: good + neutral + bad },
      this.countPositiveFeedbackPercentage
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state.buttons;
    this.setState({
      positivePercentage: parseInt((100 / (good + neutral + bad)) * good),
    });
  };

  render() {
    const { good, neutral, bad } = this.state.buttons;
    const options = Object.keys(this.state.buttons);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.state.total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
