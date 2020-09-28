import {types} from '../types';
export default (state = [], action) => {
    
    switch(action.type) {
          case types.GET_USER :
              return [...state, action.payload];
          
          default :
                return state;
    }
   
}