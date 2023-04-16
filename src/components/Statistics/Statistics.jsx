import css from './Statistics.module.css';

const Statistics = (good, neutral, bad, total, positivePercentage) => {
  console.log(good, neutral, bad, total, positivePercentage);
  return (
    <>
      <h2 className={css.title}>Statistics</h2>
      {/* <span className={css.label}>{good}</span>
      <span className={css.label}>{neutral}</span>
      <span className={css.percentage}>{bad}</span>
      <span className={css.percentage}>{total}</span>
      <span className={css.percentage}>{positivePercentage}</span> */}
    </>
  );
};

export default Statistics;
