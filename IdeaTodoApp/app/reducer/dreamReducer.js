import { ADD_NEW_DREAM, DELETE_DREAM, EDIT_DREAM } from '../action/tyeps';

const initialState = {
    dreamList: []
}

const dreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_DREAM:
            return {
                ...state,
                dreamList: state.dreamList.concat({
                    id: Math.random().toString(),
                    name: action.name,
                    description: action.description,
                    status :action.status
                })
            };
        case DELETE_DREAM:
            return {
                ...state,
                dreamList: state.dreamList.filter((item) =>
                    item.id !== action.id)
            };
        case EDIT_DREAM:
            return { 
                ...state, 
                dreamList: state.dreamList.map(
                    (dream) => dream.id === action.id ? {...dream, name: action.name,description :action.description,status :action.status}
                                            : dream
                )
             }
        default:
            return state;
    }
}


export default dreamReducer;