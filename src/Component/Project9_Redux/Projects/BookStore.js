import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyBook, sellBook } from '../Actions/ShopActions'

export default function BookStore() {
  let { totalBooks } = useSelector((state) => state.ShopReducers)
  let dispatch = useDispatch()

  return (
    <div>
      <h2>Total Books in Stock {totalBooks}</h2>
      <button onClick={() => dispatch(buyBook())}>Book Diposited by Customer </button>
      <button onClick={() => dispatch(sellBook())}>Book Withdraw by Customer </button>
    </div>
  )
}
