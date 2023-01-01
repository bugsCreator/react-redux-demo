import {
    INCREMENT,
    DECREMENT_BY_NUMBER,
    DECREMENT,
    INCREMENT_BY_NUMBER
} from "../constants/rootConstants";

export const increment = () => async(dispatch, getState) => {
    console.log("increment");
    dispatch({
        type: INCREMENT,
    });
};

export const decrement = () => async(dispatch, getState) => {
    console.log("decrement");
    dispatch({
        type: DECREMENT,
    });
};

export const increment_by_number = (num) => async(dispatch, getState) => {
    dispatch({
        type: INCREMENT_BY_NUMBER,
        payload: num
    });
};

export const decrement_by_number = (num) => async(dispatch, getState) => {
    dispatch({
        type: DECREMENT_BY_NUMBER,
        payload: num
    });
};