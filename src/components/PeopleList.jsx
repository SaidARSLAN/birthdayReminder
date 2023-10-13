import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPeople } from '../store/people'
import PeopleDetail from './PeopleDetail'

const PeopleList = () => {

  const people = useSelector(state => state.people)
  const dispatch = useDispatch();
  useEffect(() => {
    if (people.status === "idle") {
      dispatch(fetchPeople());
    }
  },[]);
  return (
    <div className='bd__people-list'>
      {people.people.map((item) => {
        return <PeopleDetail item={item}/>
      })}
    </div>
  )
}

export default PeopleList