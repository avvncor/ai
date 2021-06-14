import { USER_INFO } from '../Constants/userConstant'

function userReducerInfo(state={}, action){
    switch (action.type){
        case USER_INFO:
            return { userInfo : action.payload}
        
        default:
            return state
    }

}

export {
    userReducerInfo
}