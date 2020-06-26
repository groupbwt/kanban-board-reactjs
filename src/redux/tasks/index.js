/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter({});

const initialState = {
  newListTitle: '',
  newCardTitles: {},
  deletingListLoaders: {},
  isLoading: false,
  isLoadingNewList: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksAdapter.getInitialState(initialState),
  reducers: {
    getTasks(state) {
      state.isLoading = true;
    },
    tasksReceived(state, action) {
      state.isLoading = false;
      tasksAdapter.setAll(state, action.payload);
    },
    tasksFailed(state) {
      state.isLoading = false;
    },
    startCreateList(state) {
      state.isLoadingNewList = true;
    },
    createdList(state, action) {
      tasksAdapter.addOne(state, action.payload);
      state.newListTitle = '';
      state.isLoadingNewList = false;
    },
    startDeletingList(state, action) {
      state.deletingListLoaders[action.payload] = true;
    },
    deletedList(state, action) {
      tasksAdapter.removeOne(state, action.payload);
      delete state.deletingListLoaders[action.listId];
    },
    onChangeNewListTitle(state, action) {
      state.newListTitle = action.payload;
    },
    startCreateCard(state, action) {
      state.entities[action.payload.listId].isCreatingCard = true;
    },
    createdCard(state, action) {
      const { listId, card } = action.payload;
      state.entities[listId].isCreatingCard = false;
      state.newCardTitles[listId] = '';
      state.entities[listId].cards.push(card);
    },
    onChangeNewCardTitle(state, action) {
      const { listId, value = '' } = action.payload;
      state.newCardTitles[listId] = value;
    },
  },
});

export const TasksActions = tasksSlice.actions;
export const TasksSelectors = tasksAdapter.getSelectors((state) => state.tasks);

export default tasksSlice.reducer;
