import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../models/contact.model";

export interface ContactState {
  contacts: Contact[];
  contactId: string | null;
}

const initialState: ContactState = {
  contacts: [],
  contactId: null,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const editedContact = action.payload;
      const index = state.contacts.findIndex(
        (contact) => contact.id === editedContact.id
      );

      if (index !== -1) {
        state.contacts[index] = editedContact;
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setContactId: (state, action: PayloadAction<string | null>) => {
      state.contactId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addContact, editContact, deleteContact, setContactId } =
  contactSlice.actions;

export default contactSlice.reducer;
