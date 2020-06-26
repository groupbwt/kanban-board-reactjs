import React, { useEffect, useRef, useState } from 'react';
import classes from 'classnames';
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
  onAddCard: PropTypes.func.isRequired,
};
Column.defaultProps = {
  cards: [],
};

function Column({ id, title, cards, onAddCard }) {
  const column = useSelector((state) => state.tasks.entities[id]);
  const newCardTitle = useSelector((state) => state.tasks.newCardTitles[id]);
  const [isStartedCreatingCard, setIsStartedCreatingCard] = useState(false);
  const dispatch = useDispatch();
  const cardTextareaRef = useRef();
  const columnCardsRef = useRef();

  useEffect(() => {
    if (!isStartedCreatingCard || !cardTextareaRef.current) return;

    cardTextareaRef.current.addEventListener('keypress', handleTextArea);

    // eslint-disable-next-line
    return () => {
      if (!cardTextareaRef.current) return;

      cardTextareaRef.current.removeEventListener('keypress', handleTextArea);
    };
  }, [cardTextareaRef, isStartedCreatingCard, newCardTitle]);

  function handleTextArea(e) {
    if (e && Number(e.which) === 13) {
      e.preventDefault();
      onCreateCard();
    }
  }

  function toggleStartCreatCard() {
    if (!isStartedCreatingCard) {
      dispatch(
        TasksActions.onChangeNewCardTitle({
          listId: id,
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
        listId: id,
        value,
      })
    );
  }

  function onCreateCard() {
    if (!newCardTitle.trim().length) return;
    onAddCard({
      listId: id,
      title: newCardTitle,
    });
  }

  return (
    <div className={styles.column}>
      {title && (
        <div className={styles.column__header}>
          <ColumnTitle>{title}</ColumnTitle>
        </div>
      )}

      <div
        ref={columnCardsRef}
        className={classes(
          styles.column__cards,
          `dashboard__column-${id}-cards`
        )}
      >
        <ColumnCards cards={cards} />
        {isStartedCreatingCard && (
          <Textarea
            inputRef={cardTextareaRef}
            value={newCardTitle}
            onChange={onChangeNewCardValue}
            placeholder="Enter a title for this card..."
            minRows={3}
            maxRows={7}
            autoFocus
          />
        )}
      </div>
      <div className={styles.column__buttons}>
        {isStartedCreatingCard && (
          <>
            <Button
              className={styles['column__btn--create']}
              onClick={onCreateCard}
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
