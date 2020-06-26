import { put, call, takeEvery, delay } from 'redux-saga/effects';
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

  const dashboardElement = document.querySelector(
    `.dashboard__column-${action.payload.listId}-cards`
  );
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

function* deleteList(action) {
  yield delay(800);
  yield put(TasksActions.deletedList(action.payload));
}

function* deleteCard(action) {
  yield delay(800);
  yield put(TasksActions.deletedCard(action.payload));
}

export function* watchersTasks() {
  yield takeEvery(TasksActions.getTasks.toString(), getTasks);
  yield takeEvery(TasksActions.startCreateList.toString(), createList);
  yield takeEvery(TasksActions.startDeletingList.toString(), deleteList);
  yield takeEvery(TasksActions.startCreateCard.toString(), createCard);
  yield takeEvery(TasksActions.startDeletingCard.toString(), deleteCard);
}
