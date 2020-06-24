import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components/Button/Button';
import styles from './Column.module.scss';

function ColumnCreate() {
  return (
    <div className={`${styles.column} ${styles['column--create']}`}>
      <div className={styles.column__buttons}>
        <Button
          className={styles.column__btn}
          icon={<FontAwesomeIcon icon={faPlus} size="md" />}
        >
          Add another list
        </Button>
      </div>
    </div>
  );
}

export { ColumnCreate };
