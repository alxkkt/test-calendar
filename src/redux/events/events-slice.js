import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  items: [],
  filter: "",
};

const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    addEvent: {
      reducer(store, { payload }) {
        return {
          ...store,
          items: [...store.items, payload],
        };
      },
      prepare(data) {
        const today = new Date();
        const date = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          today.getHours(),
          today.getMinutes()
        );
        const newEvent = {
          ...data,
          id: nanoid(),
          createdAt: date.toString(),
          updatedAt: date.toString(),
        };

        return {
          payload: newEvent,
        };
      },
    },
    editEvent: {
      reducer(store, { payload }) {
        const filteredItems = store.items.filter(({ id }) => id !== payload.id);
        return {
          ...store,
          items: [...filteredItems, payload],
        };
      },
      prepare(data) {
        const today = new Date();
        const date = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate(),
          today.getHours(),
          today.getMinutes()
        );

        const updatedEvent = {
          ...data,
          updatedAt: date.toString(),
        };

        return {
          payload: updatedEvent,
        };
      },
    },
    deleteEvent: {
      reducer(store, { payload }) {
        const filteredItems = store.items.filter((item) => item.id !== payload);
        return {
          ...store,
          items: [...filteredItems],
        };
      },
    },
    setFilter: {
      reducer(store, { payload }) {
        return {
          ...store,
          filter: payload.toString(),
        };
      },
    },
  },
});

export const { actions } = eventsSlice;
export default eventsSlice.reducer;
