import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components/FormControls/Button/Button';
import { Textarea } from 'components/FormControls/Textarea/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { TasksActions } from 'redux/tasks';
import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import { ColumnCards } from '../ColumnCards/ColumnCards';
import styles from './Column.module.scss';

Column.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
};
Column.defaultProps = {
  cards: [],
};

function Column({ id, title, cards }) {
  const column = useSelector((state) => state.tasks.entities[id]);
  const newCardTitle = useSelector((state) => state.tasks.newCardTitles[id]);
  const [isStartedCreatingCard, setIsStartedCreatingCard] = useState(false);
  const dispatch = useDispatch();

  function toggleStartCreatCard() {
    if (!isStartedCreatingCard) {
      dispatch(
        TasksActions.onChangeNewCardTitle({
          columnId: id,
          value: '',
        })
      );
    }

    setIsStartedCreatingCard((prevState) => !prevState);
  }

  function onChangeNewCardValue(e) {
    const { value } = e.target;

    dispatch(
      TasksActions.onChangeNewCardTitle({
        columnId: id,
        value,
      })
    );
  }

  function onCreateNewCard() {
    if (!newCardTitle.trim().length) return;

    dispatch(
      TasksActions.startCreateCard({
        columnId: id,
        title: newCardTitle,
      })
    );
  }

  return (
    <div className={styles.column}>
      {title && (
        <div className={styles.column__header}>
          <ColumnTitle>{title}</ColumnTitle>
        </div>
      )}

      <div className={styles.column__cards}>
        <ColumnCards cards={cards} />

        {isStartedCreatingCard && (
          <Textarea
            className={styles.column__textarea}
            value={newCardTitle}
            onChange={onChangeNewCardValue}
            placeholder="Enter a title for this card..."
            minRows={3}
            maxRows={7}
          />
        )}
      </div>
      <div className={styles.column__buttons}>
        {isStartedCreatingCard && (
          <>
            <Button
              className={styles['column__btn--create']}
              onClick={onCreateNewCard}
              loading={column.isCreatingCard}
              color="green"
              icon={<FontAwesomeIcon icon={faPlus} size="sm" />}
            >
              Add Card
            </Button>
            <Button
              displayType="icon"
              onClick={toggleStartCreatCard}
              className={styles['column__btn--cancel']}
              color="transparent"
              disabled={column.isCreatingCard}
              icon={<FontAwesomeIcon icon={faTimes} size="lg" />}
            />
          </>
        )}
        {!isStartedCreatingCard && (
          <Button
            onClick={toggleStartCreatCard}
            className={styles.column__btn}
            icon={<FontAwesomeIcon icon={faPlus} size="sm" />}
          >
            Add a card
          </Button>
        )}
      </div>
    </div>
  );
}

export { Column };
