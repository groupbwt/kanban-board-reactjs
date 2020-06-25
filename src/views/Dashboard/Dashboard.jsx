import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectSaga } from 'redux-injectors';
import { watchersTasks } from 'redux/tasks/sagas';
import { Columns } from 'components/Columns/Columns';
import { TasksActions, TasksSelectors } from 'redux/tasks';
import styles from './Dashboard.module.scss';

class Dashboard extends Component {
  componentDidMount() {
    const { getTasks } = this.props;
    getTasks();
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className={styles.dashboard}>
        <Columns columns={tasks} onCreateCard={this.onCreateCard} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  getTasks: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  tasks: [],
};

const mapStateToProps = (state) => ({
  tasks: TasksSelectors.selectAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(TasksActions.getTasks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSaga({ key: 'tasks', saga: watchersTasks })(Dashboard));
