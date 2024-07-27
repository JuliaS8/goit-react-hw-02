import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Container from './components/Container/Container';

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const [showButtonReset, setShowButtonReset] = useState(false);
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      const resetFeedbacks = {
        good: 0,
        neutral: 0,
        bad: 0
      };
     setFeedbacks(resetFeedbacks);
     localStorage.setItem('feedbackData', JSON.stringify(resetFeedbacks));
    } else {
      setFeedbacks(prevState => {
       const updatedFeedbacks ={
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1
      };
       localStorage.setItem('feedbackData', JSON.stringify(updatedFeedbacks));
         return updatedFeedbacks;
       });
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem('feedbackData');
    console.log(savedData);

    if (savedData) {
      setFeedbacks(JSON.parse(savedData));
    }
  }, []);
   
  useEffect(() => {
    const { good, neutral, bad } = feedbacks;
    const totalFeedback = good + neutral + bad;

    setShowButtonReset(totalFeedback > 0);
    setShowFeedbacks(totalFeedback > 0);
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <Container>
        <Description />
      </Container>
      <Container>
        <Options onFeedbackUpdate={updateFeedback} showButtonReset={showButtonReset} />
      </Container>
      <Container>
        <Feedback
          good={feedbacks.good}
          neutral={feedbacks.neutral}
          bad={feedbacks.bad }
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          showFeedbacks={showFeedbacks}
        />
      </Container>
    </>
  );
}

export default App;