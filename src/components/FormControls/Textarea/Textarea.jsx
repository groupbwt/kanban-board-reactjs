import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';
import styles from './Textarea.module.scss';

Textarea.propTypes = {
  className: PropTypes.string,
};
Textarea.defaultProps = {
  className: '',
};

function Textarea({ className, ...props }) {
  return (
    <TextareaAutosize
      className={classes(styles.textarea, className)}
      {...props}
    />
  );
}

export { Textarea };
