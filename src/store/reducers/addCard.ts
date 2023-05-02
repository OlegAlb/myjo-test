import { Card } from "../../base/types";
import { AppDispatch } from "../store";

export const addCard = (card: Card) => async (dispatch: AppDispatch) => {
    console.log('Add card:', card.card_id)
}