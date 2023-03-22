import css from '../feedback.module.css';
import PropTypes from 'prop-types';

export default function Statistic ({good, neutral, bad, total, positivePercentage}) {
    return (
            <div className={css.container}>
                <p className={css.state}>Good {good}</p>
                <p className={css.state}>Neutral {neutral}</p>
                <p className={css.state}>Bad {bad}</p>
                <p className={css.state}>Total {total}</p>
                <p className={css.state}>PositivePercentage {positivePercentage}%</p>
            </div>)
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
