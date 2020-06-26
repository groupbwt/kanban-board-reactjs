import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/FormControls/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './ColumnCard.module.scss';

ColumnCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  listId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node,
  onDeleteCard: PropTypes.func.isRequired,
};

function ColumnCard({ id, listId, children, onDeleteCard }) {
  const isDeleting = false;

  function onDelete() {
    onDeleteCard(listId, id);
  }

  return (
    <div className={styles.card}>
      {children}
      <Button
        displayType="icon"
        className={styles['card__delete-btn']}
        onClick={onDelete}
        disabled={isDeleting}
        color="red"
        icon={<FontAwesomeIcon icon={faTimes} size="lg" />}
      />
    </div>
  );
}

export { ColumnCard };
