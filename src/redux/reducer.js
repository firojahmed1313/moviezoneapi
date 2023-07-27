import { ADD_TO_PLAYLIST, EMPTY_PLAYLIST, REMOVE_FROM_PLAYLIST } from "./constant"



export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_PLAYLIST:
            console.warn("ADD_TO_PLAYLIST condition ", action)
            return [action.data, ...data]
        case REMOVE_FROM_PLAYLIST:
            console.warn("REMOVE_FROM_PLAYLIST condition ", action);
            
            const remainingItems= data.filter((item)=>item.id!==action.data)
            return [...remainingItems]
            
        case EMPTY_PLAYLIST:
            console.warn("EMPTY_PLAYLIST condition ", action);
            data =[]
            return [...data]
        default:
            return data
    }
}