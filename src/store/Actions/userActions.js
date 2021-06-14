import { USER_INFO } from '../Constants/userConstant'

const userinfo = (info) => async ( dispatch, getState) =>{
    dispatch({type:USER_INFO, payload:info})
}

export {
    userinfo
}