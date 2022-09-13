import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// add new event
export const addEvent = createAsyncThunk(
  'events/add',
  (data, { rejectWithValue }) => {
    try {
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

      return newEvent;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// edit event
export const editEvent = createAsyncThunk(
  'events/edit',
  (data, { rejectWithValue }) => {
    try {
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

      return updatedEvent;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// delete event
export const deleteEvent = createAsyncThunk(
  'events/delete',
  (id, { rejectWithValue }) => {
    try {
      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

// set new date filter
export const setFilter = createAsyncThunk(
  'filter/set',
  (data, { rejectWithValue }) => {
    try {
      return data.toString();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
