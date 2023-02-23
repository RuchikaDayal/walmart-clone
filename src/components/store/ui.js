import { createSlice } from "@reduxjs/toolkit";

const showcart =createSlice({
name: 'ui',
initialState:{toggle: false , notification : null},
reducers:{
    toggling(state){
        state.toggle = !state.toggle
    },
    shownotification (state , action ){
        state.notification = {
            title : action.payload.title,
            status: action.payload.status,
            message: action.payload.message,
        }
    }
}
})

export const showcartAction = showcart.actions;
export default showcart;
