import * as actionTypes from '../actions';
import updateState from '../utility';

const initialState = {
    counter: 0,
};

const counter = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateState(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT:
            return updateState(state, {counter: state.counter - 1});
        case actionTypes.ADD:
            return updateState(state, {counter: state.counter + action.value});
        default:
            return state;
    }
};

export default counter;