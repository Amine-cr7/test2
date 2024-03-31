import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "./PlayersSlice"
export const store = configureStore({
    reducer:{
        players:PlayerReducer
    }
})