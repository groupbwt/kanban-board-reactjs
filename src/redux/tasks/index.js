/* eslint-disable no-param-reassign */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter({});

const initialState = {
  newListTitle: '',
  newCardTitles: {},
  isLoading: false,
  isLoadingNewList: false,
  isDeletingCard: false,
  isDeletingList: false,
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
    startDeletingList(state) {
      state.isDeletingList = true;
    },
    deletedList(state, action) {
      tasksAdapter.removeOne(state, action.payload);
      state.isDeletingList = false;
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
    startDeletingCard(state) {
      state.isDeletingCard = true;
    },
    deletedCard(state, action) {
      const { listId, cardId } = action.payload;
      const updatedList = tasksAdapter.getSelectors().selectById(state, listId);
      const updatedCards = updatedList.cards;
      const deletedCardIdx = updatedCards.findIndex(
        (card) => card.id === cardId
      );
      if (deletedCardIdx > -1) {
        updatedList.cards.splice(deletedCardIdx, 1);
      }

      tasksAdapter.updateOne(state, {
        id: listId,
        cards: updatedCards,
      });
      state.isDeletingCard = false;
    },
    onChangeNewCardTitle(state, action) {
      const { listId, value = '' } = action.payload;
      state.newCardTitles[listId] = value;
    },
    changeCardOrder() {},
    changedCardOrder(state, action) {
      const { listId, cardId, order } = action.payload;

      const updatedList = tasksAdapter.getSelectors().selectById(state, listId);
      const updatedCards = updatedList.cards;
      const updatedCard = updatedCards.find((card) => card.id === cardId);
      if (updatedCard) {
        updatedCard.order = order;
      }

      const sortedCards = updatedCards.sort((a, b) => {
        if (a.order > b.order) {
          return -1;
        }
        if (a.order < b.order) {
          return 1;
        }
        // a должно быть равным b
        return 0;
      });

      tasksAdapter.updateOne(state, {
        id: listId,
        cards: sortedCards,
      });
    },
  },
});

export const TasksActions = tasksSlice.actions;
export const TasksSelectors = tasksAdapter.getSelectors((state) => state.tasks);

export default tasksSlice.reducer;
