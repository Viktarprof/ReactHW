import React from 'react';
import { combineReducers, createStore} from 'redux';
import { countReduser } from './countReduser';

const rootReduser = combineReducers({
    count: countReduser,
})

export const store = createStore(rootReduser)
