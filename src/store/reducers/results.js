import * as actionTypes from '../actions';
import shortid from 'shortid';
import updateState from '../utility';

const initialState = {
    results: []
};

const updArr = (state, action) => {
    const updArr = state.results.filter(el => el.id !== action.id);
    return{
        ...state,
        results: updArr
    };
};

const results = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULTS :
            return updateState(state, {results: state.results.concat({value: action.counter, id: shortid.generate()})});
        case actionTypes.DELETE_RESULTS :
            return updArr(state, action);
        default:
            return state;
    }
};

export default results;