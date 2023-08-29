import { takeEvery, put, call } from 'redux-saga/effects'
import { PRODUCT_LIST,TOP_LIST,UPCOMING_LIST,POPULAR_PRODUCT,CATAGORY_PRODUCT, TV_LIST ,TRENDING_PRODUCT ,CATAGORY_MOVIES, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';
import movieData from './movie.json';
import { httpGet } from '../utils/api.js';


function* getProducts() {
    console.log("firoj3")

    try {
        
        let { data } = yield httpGet("https://api.themoviedb.org/3/discover/movie?api_key=6ff4c3806365f19269082c91227e14bc&sort_by=popularity.desc&page=2");
        //let { data } = yield httpGet("https://api.themoviedb.org/3/trending/all/day?api_key=6ff4c3806365f19269082c91227e14bc");

        console.warn("product saga is called", data)
        yield put({type: SET_PRODUCT_LIST, payload: data.results})
    } catch (error) {
        console.warn(error)
    }
    /*
    let data = yield fetch('http://localhost:3030/movies');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
    */
    
}
function* topProducts() {
    console.log("firoj3")

    try {
        
        let { data } = yield httpGet("https://api.themoviedb.org/3/movie/top_rated?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US");
        //let { data } = yield httpGet("https://api.themoviedb.org/3/trending/all/day?api_key=6ff4c3806365f19269082c91227e14bc");

        console.warn("product saga is called", data)
        yield put({type: SET_PRODUCT_LIST, payload: data.results})
    } catch (error) {
        console.warn(error)
    }
   
}
function* upcomingProducts() {
    console.log("firoj3")

    try {
        
        let { data } = yield httpGet("https://api.themoviedb.org/3/movie/upcoming?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US");
        //let { data } = yield httpGet("https://api.themoviedb.org/3/trending/all/day?api_key=6ff4c3806365f19269082c91227e14bc");

        console.warn("product saga is called", data)
        yield put({type: SET_PRODUCT_LIST, payload: data.results})
    } catch (error) {
        console.warn(error)
    }
   
}


function* tvProducts() {
    console.log("firoj3")

    try {
        
        let { data } = yield httpGet("https://api.themoviedb.org/3/discover/tv?api_key=6ff4c3806365f19269082c91227e14bc&sort_by=popularity.desc&page=2");
        //let { data } = yield httpGet("https://api.themoviedb.org/3/trending/all/day?api_key=6ff4c3806365f19269082c91227e14bc");

        console.warn("product saga is called", data)
        yield put({type: SET_PRODUCT_LIST, payload: data.results})
    } catch (error) {
        console.warn(error)
    }
    /*
    let data = yield fetch('http://localhost:3030/movies');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
    */
    
}
//https://api.themoviedb.org/3/movie/976573/videos?api_key=6ff4c3806365f19269082c91227e14bc
//https://api.themoviedb.org/3/search/movie?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US&query=${searchText}&page=${page}&include_adult=false` &language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1
//https://api.themoviedb.org/3/genre/${type}/list?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US
//https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=6ff4c3806365f19269082c91227e14bc
function* searchProducts(searchTerm) {
    //const searchTer="t"
    /*const url=`https://api.themoviedb.org/3/search/movie?query=${searchTer}&api_key=6ff4c3806365f19269082c91227e14bc`
        console.log(url)*/
    //console.log(searchTerm.payload)
    try {
        const searchTer=searchTerm.payload
        const url=`https://api.themoviedb.org/3/search/movie?query=${searchTer}&api_key=6ff4c3806365f19269082c91227e14bc`
        console.log(url)
        let { data } = yield httpGet(url);
        console.warn("searchProducts saga is called", data)
        console.log("r2")
        yield put({type: SET_PRODUCT_LIST, payload: data.results})
    } 
    catch (error) {
        console.warn(error)
    }
    
    
}

function* catagoryProducts(searchTermc) {
    console.log(searchTermc.payload)
    try {
        const searchTermcr=searchTermc.payload
        const url1=`https://api.themoviedb.org/3/genre/${searchTermcr}/list?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US`
        console.log(url1)
        let { data } = yield httpGet(url1);
        console.warn("catagoryProducts saga is called", data)
        console.log("p5")
        yield put({type: SET_PRODUCT_LIST, payload: data.results})
    } 
    catch (error) {
        console.warn(error)
    }
    console.log("p2")
    yield put({type: CATAGORY_MOVIES, payload: searchTermc })
}

function* trendingProducts() {
    
    try {
        const url=`https://api.themoviedb.org/3/trending/all/day?api_key=6ff4c3806365f19269082c91227e14bc`
        console.log(url)
        let { data } = yield httpGet(url);
        console.warn("trendingProducts saga is called", data)
        //console.log("r2")
        yield put({type: SET_PRODUCT_LIST, payload: data.results})
    } 
    catch (error) {
        console.warn(error)
    }
    
    
}
//https://api.themoviedb.org/3/genre/${searchTermc}/list?api_key=6ff4c3806365f19269082c91227e14bc
function* popularProducts() {
    
    try {
        
        const url1=`https://api.themoviedb.org/3/movie/popular?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US&page=1`
        console.log(url1)
        let { data } = yield httpGet(url1);
        console.warn("popularProducts saga is called", data)
        //console.log("p5")
        yield put({type: SET_PRODUCT_LIST, payload: data.results})
    } 
    catch (error) {
        console.warn(error)
    }
    //console.log("p2")
    //yield put({type: CATAGORY_MOVIES, payload: searchTermc })
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
    yield takeEvery(CATAGORY_PRODUCT, catagoryProducts)
    yield takeEvery(POPULAR_PRODUCT, popularProducts)
    yield takeEvery(TRENDING_PRODUCT, trendingProducts)
    yield takeEvery(TV_LIST, tvProducts)
    yield takeEvery(TOP_LIST, topProducts)
    yield takeEvery(UPCOMING_LIST, upcomingProducts)


}

export default productSaga;


/* extra api 
cast = https://api.themoviedb.org/3/movie/666277/credits?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US
top rated = https://api.themoviedb.org/3/movie/top_rated?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US
upcoming = https://api.themoviedb.org/3/movie/upcoming?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US





https://api.themoviedb.org/3/person/popular?api_key=6ff4c3806365f19269082c91227e14bc&language=en-US
*/