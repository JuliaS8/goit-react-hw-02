import css from './Feedback.module.css'
import Notification from '../Notification/Notification';

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={css.feedback}>
        <ul className={css.feedbackList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
        </ul>
      </div>
)
}

export default Feedback;