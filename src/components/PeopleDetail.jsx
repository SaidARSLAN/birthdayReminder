import React from 'react'

const PeopleDetail = ({item}) => {
  return (
    <div>
        <img src={item.image} />
        <div>
        <h4>{item.name}</h4>
        <h5>{item.year}</h5>
        </div>
    </div>
  )
}

export default PeopleDetail