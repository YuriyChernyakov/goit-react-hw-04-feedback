import css from '../feedback.module.css';
import PropTypes from 'prop-types';

export default function Fbo ({ options, onLeaveFeedback }) {
    return (
        <div className={css.container}>
            {options.map(el => {
                return (
                    <button type="button" className={css.button} key={el} onClick={onLeaveFeedback}>{el}</button>)
            })}
        </div>)
}

Fbo.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};