import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ColumnCreate } from "./Column/ColumnCreate";
import { ColumnNew } from "./Column/ColumnNew";
import { Column } from './Column/Column';
import styles from './Columns.module.scss';

Columns.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
};
Columns.defaultProps = {
  columns: [],
};

function Columns({ columns }) {
  const [isStartedCreatingColumn, setIsStartedCreatingColumn] = useState(false);

  function toggleStartedCreatingColumn() {
    setIsStartedCreatingColumn((prevState) => !prevState);
  }

  return (
    <div className={styles.columns}>
      {columns.map((column) => (
        <Column key={column.id} cards={column.cards} title={column.title} />
      ))}
      {isStartedCreatingColumn && (
        <ColumnNew toggleStartedCreatingColumn={toggleStartedCreatingColumn} />
      )}
      <ColumnCreate
        isCreatingColumn={isStartedCreatingColumn}
        onStartCreateColumn={toggleStartedCreatingColumn}
      />
      <div className={styles['columns__demy-column']} />
    </div>
  );
}

export { Columns };
