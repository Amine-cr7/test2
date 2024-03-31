import { createSlice } from "@reduxjs/toolkit";

const PlayersSlice = createSlice({
    name:"players",
    initialState:[],
    reducers:{
        AddPlayer:(state,action)=>{
            state.push(action.payload)
        },
        UpdatePlayer:(state,action)=>{
            const {nom,value,position,image,id} = action.payload
            const player = state.find(item => item.id == id)
            player.nom = nom
            player.value = value
            player.image = image
            player.position = position
        },
        DeletePlayer:(state,action)=>{
            state.splice(state.findIndex(item => item.id == action.payload),1)
        }
    }
})
export default PlayersSlice.reducer
export const {AddPlayer,UpdatePlayer,DeletePlayer} = PlayersSlice.actions