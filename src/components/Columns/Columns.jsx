import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
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
  onChangeCardOrder: PropTypes.func.isRequired,
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
  onChangeCardOrder,
}) {
  const [isStartedCreatingColumn, setIsStartedCreatingColumn] = useState(false);

  function toggleStartedCreatingColumn() {
    setIsStartedCreatingColumn((prevState) => !prevState);
  }

  function onDragCardEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const toList = destination.droppableId;
    const fromList = source.droppableId;
    const toOrder = destination.index;
    const fromOrder = source.index;

    onChangeCardOrder({
      cardId: draggableId,
      toList,
      fromList,
      toOrder,
      fromOrder,
    });
  }

  return (
    <div className={styles.columns}>
      <DragDropContext onDragEnd={onDragCardEnd}>
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
      </DragDropContext>

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
