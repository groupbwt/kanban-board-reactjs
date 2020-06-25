import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColumnCard.module.scss';

ColumnCard.propTypes = {
  children: PropTypes.node,
};

function ColumnCard({ children }) {
  return <div className={styles.card}>{children}</div>;
}

export { ColumnCard };
