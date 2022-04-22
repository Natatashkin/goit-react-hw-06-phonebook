import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
      toast.success(`${action.payload.name} was added to contacts!`);
    },

    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      toast.success(`${action.payload.name} was deleted from contacts!`);
    },

    addFilterValue(state, action) {
      state.filter = action.payload;
    },

    resetFilter(state) {
      state.filter = '';
    },
  },
});

export const { addContact, removeContact, addFilterValue, resetFilter } =
  contactsSlice.actions;
