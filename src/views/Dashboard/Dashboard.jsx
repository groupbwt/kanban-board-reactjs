import React, { Component } from 'react';
import Columns from 'components/Columns/Columns';
import styles from './Dashboard.module.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <Columns
          columns={[
            {
              title: 'Plan on month',
              cards: [{ title: 'Test' }, { title: 'Test' }],
            },
            {
              title: 'Plan on day',
              cards: [{ title: 'Test' }, { title: 'Test' }],
            },
            {
              title: 'Plan on month',
              cards: [{ title: 'Test' }, { title: 'Test' }],
            },
            {
              title: 'Plan on day',
              cards: [{ title: 'Test' }, { title: 'Test' }],
            },
            {
              title: 'Plan on month',
              cards: [{ title: 'Test' }, { title: 'Test' }],
            },
            {
              title: 'Plan on day',
              cards: [{ title: 'Test' }, { title: 'Test' }],
            },
            {
              title: 'Plan on month',
              cards: [{ title: 'Test' }, { title: 'Test' }],
            },
            {
              title: 'Plan on day',
              cards: [{ title: 'Test' }, { title: 'Test' }],
            },
          ]}
        />
      </div>
    );
  }
}

export { Dashboard };
