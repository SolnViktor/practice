import {combineReducers, createStore} from 'redux';
import { loaderReducer } from './loader-reducer';



const rootReducer = combineReducers({
    loader: loaderReducer
})

export type RootStateType = ReturnType <typeof rootReducer>
export const store = createStore(rootReducer)