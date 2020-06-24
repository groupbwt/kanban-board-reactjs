import React from 'react';
import PropTypes from 'prop-types';
import { Column } from './Column/Column';
import styles from './Columns.module.scss';

Columns.propTypes = {
  columns: PropTypes.arrayOf(),
};
Columns.defaultProps = {
  columns: [],
};

function Columns({ columns }) {
  return (
    <div className={styles.columns}>
      {columns.map((column) => (
        <Column cards={column.cards} title={column.title} />
      ))}
      <Column />
      <div className={styles['columns__demy-column']} />
    </div>
  );
}

export default Columns;
