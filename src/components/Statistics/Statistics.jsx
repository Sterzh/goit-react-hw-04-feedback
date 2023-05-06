import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <p className={css.title}>Good: {good}</p>
      <p className={css.title}>Neutral: {neutral}</p>
      <p className={css.title}>Bad: {bad}</p>
      <p className={css.title}>Total: {total}</p>
      <p className={css.title}>PositivePercentage: {positivePercentage}</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
