import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.title}>Good: {good}</p>
      <p className={css.title}>Neutral: {neutral}</p>
      <p className={css.title}>Bad: {bad}</p>
      <p className={css.title}>Total: {total}</p>
      <p className={css.title}>PositivePercentage: {positivePercentage}</p>
    </>
  );
};

export default Statistics;
