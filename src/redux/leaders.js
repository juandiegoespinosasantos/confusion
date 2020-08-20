/**
 * Front-End Web Development with React - Week 4, assignment 4
 * @author https://github.com/juandiegoespinosasantos
 * @since Aug 19, 2020
 */

import * as ActionTypes from './ActionTypes';

export const Leaders = (state = { isLoading: true, errorMessage: null, leaders: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return { ...state, isLoading: false, errorMessage: null, leaders: action.payload };

        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading: true, errorMessage: null, leaders: [] }

        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errorMessage: action.payload };

        default:
            return state;
    }
};