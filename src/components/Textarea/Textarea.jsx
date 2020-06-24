import React from 'react';
import PropTypes from 'prop-types';
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
      className={`${styles.textarea} ${className}`}
      {...props}
    />
  );
}

export { Textarea };
