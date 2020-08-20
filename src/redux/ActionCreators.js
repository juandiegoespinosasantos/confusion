/**
 * Front-End Web Development with React - Week 4, assignment 4
 * @author https://github.com/juandiegoespinosasantos
 * @since Aug 19, 2020
 */

import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, author, rating, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    };

    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(
        response => {
            if (response.ok) {
                return response;
            }

            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;

            throw error;
        },

        error => {
            throw error;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message);
        });
};

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(
            response => {
                if (response.ok) {
                    return response;
                }

                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;

                throw error;
            },
            error => {
                throw new Error(error.message);
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errorMessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMessage
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(
            response => {
                if (response.ok) {
                    return response;
                }

                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;

                throw error;
            },
            error => {
                throw new Error(error.message);
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errorMessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errorMessage
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
        .then(
            response => {
                if (response.ok) {
                    return response;
                }

                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;

                throw error;
            },
            error => {
                throw new Error(error.message);
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errorMessage) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMessage
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
        .then(
            response => {
                if (response.ok) {
                    return response;
                }

                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;

                throw error;
            },
            error => {
                throw new Error(error.message);
            })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errorMessage) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errorMessage
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const sendFeedback = (firstName, lastName, phoneNumber, email, allowContact, contactType, message) => (dispatch) => {
    const feedback = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        allowContact: allowContact,
        contactType: contactType,
        message: message,
        date: new Date().toISOString()
    };

    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(
        response => {
            if (response.ok) {
                return response;
            }

            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;

            throw error;
        },

        error => {
            throw error;
        })
        .then(response => response.json())
        .then(response => alert(JSON.stringify(response)))
        .catch(error => {
            console.log('post feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        });
};