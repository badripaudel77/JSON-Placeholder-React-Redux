//action creators are the one to deal with fetching / calling apis

import api from '../api/api';
import { types } from '../types';

//redux thunk - if used
export const getPosts = () => {
    // return async function(dispatch){ // same code.}
    return async dispatch => {
            const response = await api.get('/posts');
            dispatch({type : types.GET_POSTS, payload : response.data});
    }
}

//arrow function syntax, function returning function like above.
export const getUser = (userId) => async dispatch=> {
        const response = await api.get(`/users/${userId}`);
        // console.log(response.data.name)
        dispatch({type : types.GET_USER, payload : response.data})
    }
