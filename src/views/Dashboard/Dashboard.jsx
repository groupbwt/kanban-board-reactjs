import React, { Component } from 'react';
import classes from 'classnames';
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

  onAddList = (title) => {
    const { startCreateList } = this.props;
    startCreateList({ title });
  };

  onDeleteList = (listId) => {
    const { startDeletingList } = this.props;
    startDeletingList(listId);
  };

  onAddCard = (payload) => {
    const { startCreateCard } = this.props;
    startCreateCard(payload);
  };

  onDeleteCard = (listId, cardId) => {
    const { startDeletingCard } = this.props;

    startDeletingCard({ listId, cardId });
  };

  onChangeCardOrder = (payload) => {
    const { onChangeCardOrder } = this.props;
    onChangeCardOrder(payload);
  };

  render() {
    const { tasks } = this.props;
    return (
      <div className={classes(styles.dashboard, 'dashboard-page')}>
        <Columns
          columns={tasks}
          onAddList={this.onAddList}
          onDeleteList={this.onDeleteList}
          onAddCard={this.onAddCard}
          onDeleteCard={this.onDeleteCard}
          onChangeCardOrder={this.onChangeCardOrder}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  getTasks: PropTypes.func.isRequired,
  startCreateList: PropTypes.func.isRequired,
  startDeletingList: PropTypes.func.isRequired,
  startCreateCard: PropTypes.func.isRequired,
  startDeletingCard: PropTypes.func.isRequired,
  onChangeCardOrder: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
  tasks: [],
};

const mapStateToProps = (state) => ({
  tasks: TasksSelectors.selectAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(TasksActions.getTasks()),
  startCreateList: (title) => dispatch(TasksActions.startCreateList(title)),
  startDeletingList: (listId) =>
    dispatch(TasksActions.startDeletingList(listId)),
  startCreateCard: (payload) => dispatch(TasksActions.startCreateCard(payload)),
  startDeletingCard: (payload) =>
    dispatch(TasksActions.startDeletingCard(payload)),
  onChangeCardOrder: (payload) =>
    dispatch(TasksActions.changeCardOrder(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSaga({ key: 'tasks', saga: watchersTasks })(Dashboard));
