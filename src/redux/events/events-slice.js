import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    items: [],
  },
  reducers: {
    addEvent: {
      reducer(store, { payload }) {
        return {
          items: [...store.events.items, payload],
        };
      },
      prepare(data) {
        const newEvent = {
          ...data,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };

        return {
          payload: newEvent,
        };
      },
    },
    editEvent: {
      reducer(store, { payload }) {
        const filteredItems = store.events.items.filter(
          ({ id }) => id !== payload.id
        );
        return {
          items: [...filteredItems, payload],
        };
      },
    },
    deleteEvent: {
      reducer(store, { payload }) {
        const { id } = payload;

        const filteredItems = store.events.items.filter(
          (item) => item.id !== id
        );
        return {
          items: [...filteredItems],
        };
      },
    },
  },
});

export const { actions } = eventsSlice;
export default eventsSlice.reducer;
