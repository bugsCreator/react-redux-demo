import {
    INCREMENT,
    DECREMENT,
    INCREMENT_BY_NUMBER,
    DECREMENT_BY_NUMBER
} from "../constants/rootConstants";

export const rootReducer = (
    state = 0,
    action
) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        case INCREMENT_BY_NUMBER:
            return state + action.payload;

        case DECREMENT_BY_NUMBER:
            return state - action.payload;

        default:
            return state;
    }
};