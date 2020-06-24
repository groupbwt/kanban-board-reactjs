import React from 'react';
import PropTypes from 'prop-types';
import { ColumnCreate } from 'components/Columns/Column/ColumnCreate';
import { Column } from './Column/Column';
import styles from './Columns.module.scss';

Columns.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
};
Columns.defaultProps = {
  columns: [],
};

function Columns({ columns }) {
  return (
    <div className={styles.columns}>
      {columns.map((column) => (
        <Column key={column.id} cards={column.cards} title={column.title} />
      ))}
      <ColumnCreate />
      <div className={styles['columns__demy-column']} />
    </div>
  );
}

export { Columns };
