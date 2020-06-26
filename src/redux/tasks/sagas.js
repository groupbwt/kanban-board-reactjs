import { put, call, all, takeEvery, delay } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { TasksActions } from './index';

function getTasksRequest() {
  return fetch('tasks.json').then((res) => res.json());
}

function* getTasks() {
  try {
    const data = yield call(getTasksRequest);
    yield put(TasksActions.tasksReceived(data.tasks));
  } catch (error) {
    yield put(TasksActions.tasksFailed());
  }
}

function* createCard(action) {
  yield delay(800);
  yield put(
    TasksActions.createdCard({
      listId: action.payload.listId,
      card: {
        id: uuidv4(),
        title: action.payload.title,
      },
    })
  );

  const dashboardElement = document.querySelector( `.dashboard__column-${action.payload.listId}-cards`);
  if (!dashboardElement) return;
  dashboardElement.scrollTop = dashboardElement.scrollHeight;
}

function* createList(action) {
  yield delay(800);
  yield put(
    TasksActions.createdList({
      id: uuidv4(),
      title: action.payload.title,
      cards: [],
    })
  );

  const dashboardElement = document.querySelector('.dashboard-page');
  if (!dashboardElement) return;
  dashboardElement.scrollLeft = dashboardElement.scrollWidth;
}

export function* watchCreateList() {
  yield takeEvery(TasksActions.startCreateList.toString(), createList);
}

export function* watchCreateCard() {
  yield takeEvery(TasksActions.startCreateCard.toString(), createCard);
}

export function* watchGetTasks() {
  yield takeEvery(TasksActions.getTasks.toString(), getTasks);
}

export function* watchersTasks() {
  yield all([watchCreateCard(), watchGetTasks(), watchCreateList()]);
}
