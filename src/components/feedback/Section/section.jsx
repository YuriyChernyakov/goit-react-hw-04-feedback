import PropTypes from 'prop-types';
import css from '../feedback.module.css';

export default function Section ({ title, children }) {
  return (
    <>
      <p className={css.text}>{title}</p>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};