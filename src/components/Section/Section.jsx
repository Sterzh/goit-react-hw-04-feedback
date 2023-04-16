import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import css from './Section.module.css';

class Section extends Component {
  state = {
    total: 4,
    positivePercentage: 5,
  };

  render() {
    return (
      <>
        <section className={css.section}>
          <h2 className={css.title}>{this.props.title}</h2>
          <FeedbackOptions />
          <Statistics
            good={this.props.state.good}
            neutral={this.props.state.neutral}
            bad={this.props.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        </section>
      </>
    );
  }
}

export default Section;
