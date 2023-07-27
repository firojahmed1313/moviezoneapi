import { takeEvery, put, call } from 'redux-saga/effects'
import { PRODUCT_LIST,SEARCH_MOVIES,CATAGORY_PRODUCT, CATAGORY_MOVIES, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';
import movieData from './movie.json';


function* getProducts() {
    console.log("firoj3")

    try {
        
        yield put({type: SET_PRODUCT_LIST, payload: movieData.movies })
    } catch (error) {
        console.warn(error)
    }
    
}

function* searchProducts(searchTerm) {
    //console.log(data)
    //let result = yield fetch(`http://localhost:3030/movies?q=${data.query}`);
    //result = yield result.json();
    //console.warn("action is called", result)
    console.log("r2")
    yield put({type: SEARCH_MOVIES, payload: searchTerm })
}
function* catagoryProducts(searchTermc) {
    //console.log(data)
    //let result = yield fetch(`http://localhost:3030/movies?q=${data.query}`);
    //result = yield result.json();
    //console.warn("action is called", result)
    console.log("p2")
    yield put({type: CATAGORY_MOVIES, payload: searchTermc })
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
    yield takeEvery(CATAGORY_PRODUCT, catagoryProducts)


}

export default productSaga;