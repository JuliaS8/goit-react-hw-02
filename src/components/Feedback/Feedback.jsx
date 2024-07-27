import css from './Feedback.module.css'

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback, showFeedbacks }) => {
  return (
    <div className={css.feedback}>
      {showFeedbacks ? (
      <ul className={css.feedbackList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>) : (<p>No feedbacks yet</p>)}
      </div>
)
}

export default Feedback;