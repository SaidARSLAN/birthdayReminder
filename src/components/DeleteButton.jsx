import React from 'react'
import { useDispatch } from 'react-redux'
import { DELETE_LİST } from '../store/people'

const DeleteButton = () => {

  const dispatch = useDispatch();

  return (
    <button className='bd__button' onClick={() => {dispatch(DELETE_LİST())}}>Clear All</button>
  )
}

export default DeleteButton