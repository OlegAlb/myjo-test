import { Card, CardType } from "../../base/types";
import { AppDispatch } from "../store";
import { cardSlice } from "./CardSlice"
import axios, { AxiosError } from "axios"

export const fetchCards = () => async (dispatch: AppDispatch) => {
    dispatch(cardSlice.actions.cardsFetching());
    // axios.get<Card[]>('https://example.ru/api') // Will fail with 404, so we'll mock that data
    Promise.resolve({
        data: [...Array(40)].map((_, index) => {
            return {
                card_id: index,
                reviewer_id: Math.round(Math.random() * 10),
                name: 'Помыть посуду',
                description: 'Много посуды',
                reward: Math.round(Math.random() * 1000),
                photo_required: !!Math.round(Math.random()),
                video_required: !!Math.round(Math.random()),
                schedule: null,
                period_start: null,
                period_stop: null,
                type: !!Math.round(Math.random()) ? CardType.TASKS : CardType.COURSES,
            }
        }) as Card[]
    }) 
    .then(response => {
        dispatch(cardSlice.actions.cardsFetchingSuccess(response.data))
    })
    .catch(e => {
        dispatch(cardSlice.actions.cardsFetchingError(e.message))
    })
}