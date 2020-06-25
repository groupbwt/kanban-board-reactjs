import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectSaga } from 'redux-injectors';
import { Columns } from 'components/Columns/Columns';
import { getTasks } from 'redux/tasks/sagas';
import { TasksSelectors } from 'redux/tasks';
import styles from './Dashboard.module.scss';

class Dashboard extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className={styles.dashboard}>
        <Columns columns={tasks} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
};

Dashboard.defaultProps = {
  tasks: [],
};

const mapStateToProps = (state) => ({
  tasks: TasksSelectors.selectAll(state),
});

export default connect(mapStateToProps)(
  injectSaga({ key: 'books', saga: getTasks })(Dashboard)
);
