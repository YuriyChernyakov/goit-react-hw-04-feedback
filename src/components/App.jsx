import { Component } from "react";
import { Statistic } from '../components/feedback/Statistics/statistic';
import { Fbo } from './feedback/FeedbackOptions/fbo';
import { Section } from './feedback/Section/section';
import css from '../components/feedback/feedback.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  total = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  countPercentage = () => {
    return this.total() !== 0
      ? Math.round((this.state.good / this.total()) * 100)
      : 0;
  };

  onBtnClick=(key)=>{
    this.setState((prevState) => {
      return {
        ...prevState,
        [key]: (prevState[key] += 1)
      };
    });
  }


  render() {
    const { bad, good, neutral } = this.state;
    const {
      total,
      countPercentage,
      onBtnClick,
      state,
    } = this;
    const options = Object.keys(state);
    return (
      <div className={css.main}>
        <Section title={'Please, leave feedback'}>
          <Fbo
            options={options}
            onLeaveFeedback={onBtnClick}
          />
          <p className={css.text}>Statistic:
          {total() === 0 ? (
             " There is no feedback"
          ) : (
            <Statistic
              good={good}
              bad={bad}
              neutral={neutral}
              total={total()}
              positivePercentage={countPercentage()}
            />
          )}</p>
        </Section>
      </div>
    );
  }
}