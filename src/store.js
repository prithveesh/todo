
import { createContext } from 'react';

export const Context = createContext();

export function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TASK':
            // const oldSstate = state;
            // console.log('this action', action.payload);
            state.list.push(action.payload);
            // console.log(state.list);
            // return state;
            
            const newState = {
                ...state
            };

            // console.log("state === oldState: ", state === oldState);
            // console.log("state === newState: ", state === newState);

            return newState;
        case 'REMOVE_TASK':
            console.log(state.list.splice(action.payload, 1));
            console.log(state.list);
            return {
                ...state
            }
        default:
            return state;
    }
}

// 

// let name = 'firstName';
// let oldName = name;

// console.log(name === oldName); // true
// name = 'newName';
// console.log(name === oldName); // false

// let obj = { 
//     name: 'firstName'
// };
// let oldObj = obj;
// console.log(obj === oldObj); // true
// obj.name = 'newName';
// console.log(obj === oldObj); // true
// let newObj = {
//     ...obj
// };
// console.log(obj === newObj); // true
// console.log(newObj);

