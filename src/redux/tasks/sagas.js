import { put, call, all, takeEvery, delay } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { TasksActions } from './index';

function getTasksRequest() {
  return fetch('tasks.json').then((res) => res.json());
}

export function* getTasks() {
  try {
    const data = yield call(getTasksRequest);
    yield put(TasksActions.tasksReceived(data.tasks));
  } catch (error) {
    yield put(TasksActions.tasksFailed());
  }
}

export function* createCard(action) {
  yield delay(1500);
  yield put(
    TasksActions.createdCard({
      listId: action.payload.listId,
      card: {
        id: uuidv4(),
        title: action.payload.title,
      },
    })
  );
}

export function* watchCreateCard() {
  yield takeEvery(TasksActions.startCreateCard.toString(), createCard);
}

export function* watchGetTasks() {
  yield takeEvery(TasksActions.getTasks.toString(), getTasks);
}

export function* watchersTasks() {
  yield all([watchCreateCard(), watchGetTasks()]);
}
