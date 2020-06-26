import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ColumnCreate } from './Column/ColumnCreate';
import { ColumnNew } from './Column/ColumnNew';
import { Column } from './Column/Column';
import styles from './Columns.module.scss';

Columns.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  onAddList: PropTypes.func.isRequired,
  onDeleteList: PropTypes.func.isRequired,
  onAddCard: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};
Columns.defaultProps = {
  columns: [],
};

function Columns({
  columns,
  onAddList,
  onDeleteList,
  onAddCard,
  onDeleteCard,
}) {
  const [isStartedCreatingColumn, setIsStartedCreatingColumn] = useState(false);

  function toggleStartedCreatingColumn() {
    setIsStartedCreatingColumn((prevState) => !prevState);
  }

  return (
    <div className={styles.columns}>
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          cards={column.cards}
          title={column.title}
          onAddCard={onAddCard}
          onDeleteList={onDeleteList}
          onDeleteCard={onDeleteCard}
        />
      ))}
      {isStartedCreatingColumn && (
        <ColumnNew
          onAddList={onAddList}
          toggleStartedCreatingColumn={toggleStartedCreatingColumn}
        />
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
