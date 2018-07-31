import {createStore} from 'redux';

import {boardReducer} from './reducers/board-reducer.js';

export default createStore(boardReducer);