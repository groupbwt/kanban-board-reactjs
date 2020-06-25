import { put, call } from 'redux-saga/effects';
import { TasksActions } from './index';

function getTasksRequest() {
  return fetch('tasks.json').then((res) => res.json());
}

export function* getTasks() {
  yield put(TasksActions.getTasks());

  try {
    const data = yield call(getTasksRequest);
    yield put(TasksActions.tasksReceived(data.tasks));
  } catch (error) {
    yield put(TasksActions.tasksFailed());
  }
}
