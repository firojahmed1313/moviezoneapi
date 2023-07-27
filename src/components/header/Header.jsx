import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productList, productSearch } from '../../redux/productAction'
import './header.css'
const Header = () => {
  const result = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
  console.warn("data in header", result);
  return (
    <>
    <div className='headerstyle'>
      <div className='search-box'>
          <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
      </div>
      
    </div>
    </>
  )
}

export default Header