import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import styles from './Column.module.scss';

function ColumnNew() {
  return (
    <div className={`${styles.column}`}>
      <div className={styles.column__header}>
        <Input />
      </div>
      <Button
        className={styles.column__btn}
        icon={<FontAwesomeIcon icon={faPlus} size="md" />}
      >
        Add list
      </Button>
    </div>
  );
}

export { ColumnNew };
