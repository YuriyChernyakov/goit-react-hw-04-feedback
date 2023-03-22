import { useState } from "react";
import Statistic from '../components/feedback/Statistics/statistic';
import Fbo from './feedback/FeedbackOptions/fbo';
import Section from './feedback/Section/section';
import css from '../components/feedback/feedback.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const nameFeedback = ['Good', 'Neutral', 'Bad'];
  
  const countTotalFeedback = good + neutral + bad;

  const countPercentage = () => {
    return countTotalFeedback !== 0
      ? Math.round((good / countTotalFeedback) * 100)
      : 0;
  };

  const onBtnClick = e => {
    switch (e.target.textContent) {
      case 'Good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'Bad':
        setBad(prevBad => prevBad + 1);
        break;
      case 'Neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      default:
        break;
    }
  };

  return <div className={css.main}>
    <Section title={'Please, leave feedback'}>
    <Fbo
        options={nameFeedback}
        onLeaveFeedback={onBtnClick}
      />
      <span className={css.text}>Statistic:
        {countTotalFeedback === 0 ? (
          " There is no feedback"
        ) : (
          <Statistic
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback}
            positivePercentage={countPercentage()}
          />
        )}</span>
    </Section>
  </div>
}