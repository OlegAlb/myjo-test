export type Nullable<T> = null | T; 

export enum CardType {
    ALL = 'ALL',
    TASKS = 'TASKS',
    COURSES = 'COURSES',
}

export type Card = {
    card_id: number,
    reviewer_id: number,
    name: string,
    description: Nullable<string>,
    every_month: Nullable<number[]>,
    reward: number,
    photo_required: boolean,
    video_required: boolean,
    schedule: Nullable<boolean[]>,
    period_start: Nullable<string>,
    period_stop: Nullable<string>,
    type: CardType
}