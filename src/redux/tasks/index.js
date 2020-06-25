/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter({});

const initialState = {
  isLoading: false,
  newCardTitles: {},
  error: false,
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
    startCreateCard(state, action) {
      state.entities[action.payload.columnId].isCreatingCard = true;
    },
    createdCard(state, action) {
      const { columnId, card } = action.payload;
      state.entities[columnId].isCreatingCard = false;
      state.newCardTitles[columnId] = '';
      state.entities[columnId].cards.push(card);
    },
    onChangeNewCardTitle(state, action) {
      const { columnId, value = '' } = action.payload;
      state.newCardTitles[columnId] = value;
    },
  },
});

export const TasksActions = tasksSlice.actions;
export const TasksSelectors = tasksAdapter.getSelectors((state) => state.tasks);

export default tasksSlice.reducer;
