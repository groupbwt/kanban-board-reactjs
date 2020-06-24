import React, { Component } from 'react';
import { Columns } from 'components/Columns/Columns';
import styles from './Dashboard.module.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className={styles.dashboard}>
        <Columns
          columns={[
            {
              id: 1,
              title: 'Plan on month',
              cards: [
                { id: 1, title: 'Test' },
                { id: 2, title: 'Test' },
              ],
            },
            {
              id: 2,
              title: 'Plan on day',
              cards: [
                { id: 1, title: 'Test' },
                { id: 2, title: 'Test' },
              ],
            },
            {
              id: 3,
              title: 'Plan on month',
              cards: [
                { id: 1, title: 'Test' },
                { id: 2, title: 'Test' },
              ],
            },
          ]}
        />
      </div>
    );
  }
}

export { Dashboard };
