import { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export default function App() {
  const [buttons, setButtons] = useState({ good: 0, neutral: 0, bad: 0 });
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleIncrement = buttonClickName => {
    setButtons(prevButtons => ({
      ...prevButtons,
      [buttonClickName]: prevButtons[buttonClickName] + 1,
    }));
  };

  useEffect(() => {
    const { good, neutral, bad } = buttons;
    setTotal(good + neutral + bad);
    setPositivePercentage(parseInt((100 / (good + neutral + bad)) * good));
  }, [buttons]);

  const { good, neutral, bad } = buttons;
  const options = Object.keys(buttons);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
