import { Card } from "../../base/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardState {
    cards: Card[],
    isLoading: boolean,
    error: string
}

const initialState: CardState = {
    cards: [],
    isLoading: false,
    error: ''
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        cardsFetching(state) {
            state.isLoading = true;
        },
        cardsFetchingSuccess(state, action: PayloadAction<Card[]>) {
            state.isLoading = false;
            state.error = '';
            state.cards = action.payload
        },
        cardsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addCard(state, action: PayloadAction<Card>){
            state.cards.push(action.payload);
        }
    }
})

export default cardSlice.reducer;