import { ADD_TO_PLAYLIST, EMPTY_PLAYLIST, REMOVE_FROM_PLAYLIST } from "./constant"

export const addToPlaylist=(data)=>{
    console.warn("ADD_TO_PLAYLIST called");
    return {
        type: ADD_TO_PLAYLIST,
        data
    }
}
export const emptyPlaylist=()=>{
    console.warn("EMPTY_PLAYLIST called");
    return {
        type: EMPTY_PLAYLIST,
        
    }
}
export const removePlaylist=(data)=>{
    console.warn("REMOVE_FROM_PLAYLIST called");
    return {
        type: REMOVE_FROM_PLAYLIST,
        data
    }
}