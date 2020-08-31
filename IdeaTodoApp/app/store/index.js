import { createStore, combineReducers } from 'redux';
import dreamReducer from '../reducer/dreamReducer';


const rootReducer = combineReducers({
    dreamReducer : dreamReducer,
 })

const configureStore = () => createStore(rootReducer);

export default configureStore;