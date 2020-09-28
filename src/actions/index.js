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