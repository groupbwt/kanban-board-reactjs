import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColumnCards.module.scss';
import { ColumnCard } from '../ColumnCard/ColumnCard';

ColumnCards.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
  onDeleteCard: PropTypes.func.isRequired,
};
ColumnCards.defaultProps = {
  cards: [],
};

function ColumnCards({ id, cards, onDeleteCard }) {
  if (cards && !cards.length) return null;

  return (
    <ul className={styles.cards}>
      {cards.map((card) => (
        <ColumnCard
          key={card.id}
          id={card.id}
          listId={id}
          onDeleteCard={onDeleteCard}
        >
          {card.title}
        </ColumnCard>
      ))}
    </ul>
  );
}

export { ColumnCards };
