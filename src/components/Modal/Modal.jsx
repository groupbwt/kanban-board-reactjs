import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

Modal.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
};

Modal.defaultProps = {
  maxWidth: 350
};

function Modal({ maxWidth, children }) {
  const modal = (
    <div className={styles.modal}>
      <div className={styles.modal__content} style={{ maxWidth }}>
        {children}
      </div>
      <div className={styles.modal__overlay} />
    </div>
  );

  return createPortal(modal, document.body);
}

export { Modal };
