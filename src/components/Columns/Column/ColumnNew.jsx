import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'components/Button/Button';
import { Input } from 'components/FormControls/Input/Input';
import styles from './Column.module.scss';

ColumnNew.propTypes = {
  toggleStartedCreatingColumn: PropTypes.func.isRequired,
};

function ColumnNew({ toggleStartedCreatingColumn }) {
  return (
    <div className={classes(styles.column, styles['column--new'])}>
      <div className={styles.column__header}>
        <Input className={styles.column__headerInput} placeholder="Enter list title..." />
      </div>
      <div className={styles.column__buttons}>
        <Button
          onClick={() => {}}
          className={styles['column__btn--create']}
          color="green"
          icon={<FontAwesomeIcon icon={faPlus} size="sm" />}
        >
          Add List
        </Button>
        <Button
          displayType="icon"
          onClick={toggleStartedCreatingColumn}
          className={styles['column__btn--cancel']}
          color="transparent"
          icon={<FontAwesomeIcon icon={faTimes} size="lg" />}
        />
      </div>
    </div>
  );
}

export { ColumnNew };
