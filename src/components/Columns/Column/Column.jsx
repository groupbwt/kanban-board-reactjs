import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components/Button/Button';
import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import { ColumnCards } from '../ColumnCards/ColumnCards';
import styles from './Column.module.scss';

Column.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(),
  className: PropTypes.string,
};
Column.defaultProps = {
  cards: [],
  className: '',
};

function Column({ title, cards, className }) {
  return (
    <div className={`${styles.column} ${className}`}>
      {title && (
        <div className={styles.column__header}>
          <ColumnTitle>{title}</ColumnTitle>
        </div>
      )}

      <div className={styles.column__cards}>
        <ColumnCards cards={cards} />
      </div>
      <Button
        className={styles.column__btn}
        icon={<FontAwesomeIcon icon={faPlus} size="lg" />}
      >
        Add a card
      </Button>
    </div>
  );
}

export { Column };
