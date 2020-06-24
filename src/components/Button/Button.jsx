import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  className: PropTypes.string,
};

function Button({ children, icon, className, ...restProps }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      {...restProps}
    >
      {icon && <span>{icon}</span>}
      <span className={styles.button__text}>{children}</span>
    </button>
  );
}

export { Button };
