import { actionTypes } from '../actionTypes';

export const display = (state = {
    IncompletedList: { expand: true },
    CompletedList: { expand: true }
}, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_DISPLAY.OF_INCOMPLETEDLIST: {
            return ({
                ...state,
                IncompletedList: {
                    ...state.IncompletedList,
                    expand: !state.IncompletedList.expand
                }
            });
        }
        case actionTypes.CHANGE_DISPLAY.OF_COMPLETEDLIST: {
            return ({
                ...state,
                CompletedList: {
                    ...state.CompletedList,
                    expand: !state.CompletedList.expand
                }
            });
        }
        default: return state;
    }
}