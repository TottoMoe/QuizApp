import { createSlince } from '@reduxjs/toolkit';

export const resultReducer = createSlince({
    name: 'result',
    initialState: {
        userId: null,
        result: []
    },
})
