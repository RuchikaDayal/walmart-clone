import {createSlice} from '@reduxjs/toolkit';

const initialauthState = {
    login:false,username:null,token:null
  };


const auth = createSlice({
    name : 'auth',
    initialState:initialauthState,
    reducers:{
        login(state) {
            return Object.assign({}, state, {
                login: true
              });
         },
         logout(state) {
            return Object.assign({}, state, {
                login: false
              });
         },
         loginusername(state,action){
            return Object.assign({}, state, {
                username: action.payload
              });
        },
            setToken(state,action){
                return Object.assign({},state,{
                    token:action.payload
                })
         }
        
    }
})

export const authAction = auth.actions;
export default auth.reducer;