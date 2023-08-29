import { PRODUCT_LIST ,UPCOMING_LIST, TOP_LIST ,CATAGORY_PRODUCT,TV_LIST, POPULAR_PRODUCT ,TRENDING_PRODUCT , SEARCH_PRODUCT } from "./constant"

export const tvList = () => {
    console.log("firoj2")

    return {
        type: TV_LIST,
    }
}
export const topList = () => {
    console.log("firoj2")

    return {
        type: TOP_LIST,
    }
}
export const upcomingList = () => {
    console.log("firoj2")

    return {
        type: UPCOMING_LIST,
    }
}
export const productList = () => {
    console.log("firoj2")

    return {
        type: PRODUCT_LIST,
    }
}
export const popularList = () => {
    console.log("firoj2")

    return {
        type: POPULAR_PRODUCT,
    }
}
export const trendingList = () => {
    console.log("firoj2")

    return {
        type: TRENDING_PRODUCT,
    }
}

export const productSearch = (query) => {
    console.log(query)
    console.log("r1")

    return {
        type: SEARCH_PRODUCT,
        payload:query
    }
}
export const productCatagory = (query) => {
    console.log(query)
    console.log("p1")

    return {
        type: CATAGORY_PRODUCT,
        payload:query
    }
}