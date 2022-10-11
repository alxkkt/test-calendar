import { createSlice } from '@reduxjs/toolkit';
import {
  addEvent,
  editEvent,
  deleteEvent,
  selectEvent,
  setFilter,
} from './events-operations';

const initialState = {
  items: [],
  selectedEvent: null,
  filter: '',
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: {
    // add new event
    [addEvent.pending]: (store, _) => ({ ...store, isLoading: true }),
    [addEvent.fulfilled]: (store, { payload }) => ({
      ...store,
      items: [...store.items, payload],
      isLoading: false,
    }),
    [addEvent.rejected]: (store, { payload }) => ({
      ...store,
      isLoading: false,
      error: payload,
    }),
    // edit event
    [editEvent.pending]: (store, _) => ({ ...store, isLoading: true }),
    [editEvent.fulfilled]: (store, { payload }) => {
      const filteredItems = store.items.filter(({ id }) => id !== payload.id);

      return {
        ...store,
        items: [...filteredItems, payload],
        isLoading: false,
      };
    },
    [editEvent.rejected]: (store, { payload }) => ({
      ...store,
      error: payload,
      isLoading: false,
    }),
    // delete event
    [deleteEvent.pending]: (store, _) => ({ ...store, isLoading: true }),
    [deleteEvent.fulfilled]: (store, { payload }) => {
      const filteredItems = store.items.filter(({ id }) => id !== payload);

      return {
        ...store,
        items: filteredItems,
        isLoading: false,
      };
    },
    [deleteEvent.rejected]: (store, { payload }) => ({
      ...store,
      isLoading: false,
      error: payload,
    }),
    // select edited event
    [selectEvent.pending]: (store, _) => ({ ...store }),
    [selectEvent.fulfilled]: (store, { payload }) => {
      const selectedEvent = store.items.filter(item => item.id === payload);

      return {
        ...store,
        selectedEvent,
      };
    },
    [selectEvent.rejected]: (store, { payload }) => ({
      ...store,
      error: payload,
    }),
    // set new date filter
    [setFilter.pending]: (store, _) => ({ ...store, isLoading: true }),
    [setFilter.fulfilled]: (store, { payload }) => ({
      ...store,
      filter: payload,
      isLoading: false,
    }),
    [setFilter.rejected]: (store, { payload }) => ({
      ...store,
      error: payload,
    }),
  },
});

export default eventsSlice.reducer;
