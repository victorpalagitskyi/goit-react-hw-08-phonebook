import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authPublicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});


export const contactsApi = createAsyncThunk('contacts/allContacts',
  async () => { 
    const res = await axios.get('contacts')
    return res.data
  })

export const addContact = createAsyncThunk('contacts/addContacts',
    async (contact, thunkAPI) => { 
      try {
        const res = await axios.post('contacts', contact)
        return res.data
      } catch (e) { 
        return thunkAPI.rejectWithValue(e.message);
      }
    })
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => { 
    try {
      const res = await axios.delete(`contacts/${id}`)
      return res.data
    } catch (e) { 
      return thunkAPI.rejectWithValue(e.message);
    }
  })


export const register = createAsyncThunk(
  'users/signUp',
  async (body, thunkAPI) => {
    try {
      const response = await authPublicInstance.post('users/signup', body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'users/signIn',
  async (body, thunkAPI) => {
    try {
      const response = await authPublicInstance.post('users/login', body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);