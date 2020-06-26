import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'components/FormControls/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { DeleteModal } from 'components/Columns/DeleteModal/DeleteModal';
import styles from './ColumnCard.module.scss';

ColumnCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  listId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

function ColumnCard({ id, listId, title, onDeleteCard }) {
  const isDeleting = useSelector((state) => state.tasks.isDeletingCard);
  const [isInitedDelete, setIsInitedDelete] = useState(false);

  function toggleInitDelete() {
    setIsInitedDelete((prevState) => !prevState);
  }

  function onDelete() {
    onDeleteCard(listId, id);
  }

  return (
    <>
      <div className={styles.card}>
        {title}
        <Button
          displayType="icon"
          className={styles['card__delete-btn']}
          onClick={toggleInitDelete}
          color="red"
          icon={<FontAwesomeIcon icon={faTimes} size="lg" />}
        />
      </div>

      {isInitedDelete && (
        <DeleteModal
          title={title}
          isDeleting={isDeleting}
          onDelete={onDelete}
          onCancel={toggleInitDelete}
        />
      )}
    </>
  );
}

export { ColumnCard };
