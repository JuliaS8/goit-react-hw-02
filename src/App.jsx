import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Container from './components/Container/Container';
import Notification from './components/Notification/Notification';

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedData = localStorage.getItem('feedbackData');
    console.log('Loaded data from localStorage:', savedData);
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    console.log('Saving feedbacks to localStorage:', feedbacks);
    localStorage.setItem('feedbackData', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedbacks({
        good: 0,
        neutral: 0,
        bad: 0
      });
    } else {
      setFeedbacks(prevState => ({
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1
      }));
    }
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <Container>
        <Description />
      </Container>
      <Container>
        <Options onFeedbackUpdate={updateFeedback} showButtonReset={totalFeedback > 0} />
      </Container>
      <Container>
        {totalFeedback > 0 ? (
          <Feedback
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </Container>
    </>
  );
};

export default App;