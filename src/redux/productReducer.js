import { SEARCH_MOVIES, SET_PRODUCT_LIST ,CATAGORY_PRODUCT} from "./constant"


export const productData = (state = { filteredMovies: [], movies: [] }, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.warn("PRODUCT_LIST condition ", action)
            console.log("firoj4")
            return {...state , movies: action.payload ,filteredMovies:action.payload }
        case SEARCH_MOVIES:
            const searchTerm = action.payload;
            
            console.log("r3")
            console.log("SEARCH_MOVIES")
            console.log(searchTerm.payload)
            const search=searchTerm.payload
            console.log(state.movies[0].Title.includes(search))
            

            var filteredMovies = state.movies.filter((movie) =>
                
                movie.Title.toString().toLowerCase().includes(search.toString().toLowerCase())
                
                
            );
            console.log(state)
            console.log(filteredMovies)
        
            
            return { ...state, filteredMovies};
        
        case CATAGORY_PRODUCT:
            const searchTermc = action.payload;
            
            console.log("r3")
            console.log("CATAGORY_PRODUCT")
            console.log(searchTermc)
            
            console.log(state.movies[0].Genre.includes(searchTermc))
            

            var filteredMovies = state.movies.filter((movie) =>
                movie.Genre.includes(searchTermc)
                
            );
            console.log(state)
            console.log(filteredMovies)
        
           
            return { ...state, filteredMovies};
        
        default:
            return state
    }
}