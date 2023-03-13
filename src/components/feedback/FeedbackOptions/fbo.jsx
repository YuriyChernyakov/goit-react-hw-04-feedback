import css from '../feedback.module.css';
// import PropTypes from 'prop-types';

export const Fbo = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.container}>
            {options.map(el => {
                console.log(el);
                return (
                    <button type="button" className={css.button} key={el} onClick={()=>onLeaveFeedback(el)}>{el}</button>)
            })}
        </div>)
}
