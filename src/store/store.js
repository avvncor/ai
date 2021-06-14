import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { userReducerInfo } from './Reducers/userReducer'


const reducer = combineReducers({
    userInformation: userReducerInfo
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
)

export default store