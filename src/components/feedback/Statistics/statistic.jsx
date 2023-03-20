import css from '../feedback.module.css';
import PropTypes from 'prop-types';

export const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
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
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};