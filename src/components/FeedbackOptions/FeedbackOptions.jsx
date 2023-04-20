import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackTitle = 'Please leave feedback';

  return (
    <>
      <h2 className={css.title}>{feedbackTitle}</h2>
      <div>
        {options.map((option, index) => {
          return (
            <button
              key={option}
              type="button"
              onClick={() => onLeaveFeedback(index)}
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
