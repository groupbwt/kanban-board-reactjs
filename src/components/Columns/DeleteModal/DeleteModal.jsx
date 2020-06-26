import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/FormControls/Button/Button';
import styles from 'components/Columns/ColumnCard/ColumnCard.module.scss';

DeleteModal.propTypes = {
  title: PropTypes.string.isRequired,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isDeleting: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

function DeleteModal({ title, maxWidth, isDeleting, onDelete, onCancel }) {
  return (
    <Modal maxWidth={maxWidth}>
      <div className={styles['card__delete-modal']}>
        <div className={styles['delete-modal__title']}>
          Are you sure to delete {title}?
        </div>
        <div className={styles['delete-modal__actions']}>
          <Button
            className={styles['delete-modal__btn']}
            onClick={onDelete}
            loading={isDeleting}
            color="red"
          >
            Delete
          </Button>
          <Button
            className={styles['delete-modal__btn']}
            onClick={onCancel}
            disabled={isDeleting}
            color="dark-gray"
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export { DeleteModal };