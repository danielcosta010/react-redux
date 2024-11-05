import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const itensSlice = createSlice({
  name: 'itens',
  initialState,
});

export default itensSlice.reducer;