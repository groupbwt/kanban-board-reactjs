import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColumnCards.module.scss';
import { ColumnCard } from '../ColumnCard/ColumnCard';

ColumnCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};
ColumnCards.defaultProps = {
  cards: [],
};

function ColumnCards({ cards }) {
  if (cards && !cards.length) return null;

  return (
    <ul className={styles.cards}>
      {cards.map((card) => (
        <ColumnCard key={card.id}>{card.title}</ColumnCard>
      ))}
    </ul>
  );
}

export { ColumnCards };
