import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPerson = createAsyncThunk(
    'swapi/fetchPerson',
    async (id) => {
        const res = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
        if (!res.ok) {
            throw new Error('Персонаж не знайдений');
        }
        return res.json();
    }
);

const swapiSlice = createSlice({
    name: 'swapi',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {
        clearData: (state) => {
            state.data = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPerson.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPerson.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchPerson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;
