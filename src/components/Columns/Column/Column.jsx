import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components/Button/Button';
import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import { ColumnCards } from '../ColumnCards/ColumnCards';
import styles from './Column.module.scss';
import { Textarea } from '../../Textarea/Textarea';

Column.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
};
Column.defaultProps = {
  cards: [],
  className: '',
};

function Column({ title, cards, className }) {
  const [isStartedCreatingCard, setIsStartedCreatingCard] = useState(false);

  function toggleStartCreatCard() {
    setIsStartedCreatingCard((prevState) => !prevState);
  }

  return (
    <div className={`${styles.column} ${className}`}>
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
            placeholder="Enter a title for this card..."
            minRows={3}
            maxRows={7}
          />
        )}
      </div>
      <div className={styles.column__buttons}>
        {isStartedCreatingCard ? (
          <>
            <Button
              onClick={toggleStartCreatCard}
              className={styles['column__btn--create']}
              color="green"
              icon={<FontAwesomeIcon icon={faPlus} size="md" />}
            >
              Add Card
            </Button>
            <Button
              displayType="icon"
              onClick={toggleStartCreatCard}
              className={styles['column__btn--cancel']}
              color="transparent"
              icon={<FontAwesomeIcon icon={faTimes} size="lg" />}
            />
          </>
        ) : (
          <Button
            onClick={toggleStartCreatCard}
            className={styles.column__btn}
            icon={<FontAwesomeIcon icon={faPlus} size="md" />}
          >
            Add a card
          </Button>
        )}
      </div>
    </div>
  );
}

export { Column };
