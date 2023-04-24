import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.buttonsContainer}>
        {options.map(option => {
          return (
            <button
              className={css.buttons}
              key={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
