//action creators are the one to deal with fetching / calling apis

import _ from 'lodash'; // importing lodash for memoize function [ stop unnecessary fetching.]

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
export const getUser = (userId) => dispatch=> {
       _getUser(userId, dispatch)
    }

//memoize using lodash library... load the one user only one    
 const _getUser = _.memoize( async (userId, dispatch) => {
    const response = await api.get(`/users/${userId}`);
    // console.log(response.data.name)
    dispatch({type : types.GET_USER, payload : response.data})
 })   
