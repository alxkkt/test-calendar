import { createSlice } from '@reduxjs/toolkit';
import {
  addEvent,
  editEvent,
  deleteEvent,
  setFilter,
} from './events-operations';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

// const eventsSlice = createSlice({
//   name: 'events',
//   initialState: initialState,
//   reducers: {
//     addEvent: {
//       reducer(store, { payload }) {
//         return {
//           ...store,
//           items: [...store.items, payload],
//         };
//       },
//       prepare(data) {
//         const today = new Date();
//         const date = new Date(
//           today.getFullYear(),
//           today.getMonth(),
//           today.getDate(),
//           today.getHours(),
//           today.getMinutes()
//         );
//         const newEvent = {
//           ...data,
//           id: nanoid(),
//           createdAt: date.toString(),
//           updatedAt: date.toString(),
//         };

//         return {
//           payload: newEvent,
//         };
//       },
//     },
//     editEvent: {
//       reducer(store, { payload }) {
//         const filteredItems = store.items.filter(({ id }) => id !== payload.id);
//         return {
//           ...store,
//           items: [...filteredItems, payload],
//         };
//       },
//       prepare(data) {
//         const today = new Date();
//         const date = new Date(
//           today.getFullYear(),
//           today.getMonth(),
//           today.getDate(),
//           today.getHours(),
//           today.getMinutes()
//         );

//         const updatedEvent = {
//           ...data,
//           updatedAt: date.toString(),
//         };

//         return {
//           payload: updatedEvent,
//         };
//       },
//     },
//     deleteEvent: {
//       reducer(store, { payload }) {
//         const filteredItems = store.items.filter(item => item.id !== payload);
//         return {
//           ...store,
//           items: [...filteredItems],
//         };
//       },
//     },
//     setFilter: {
//       reducer(store, { payload }) {
//         return {
//           ...store,
//           filter: payload.toString(),
//         };
//       },
//     },
//   },
// });

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
// export const { actions } = eventsSlice;
export default eventsSlice.reducer;
