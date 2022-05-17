import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
			value: {id: 0, title: '', author: '', description: ''}
    },
		reducers: {
			changeBook(state, action) {
				state.value = action.payload;
			}
		}
})

export const { changeBook } = bookSlice.actions;
export default bookSlice.reducer;