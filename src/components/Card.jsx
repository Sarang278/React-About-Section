import React from 'react'

function Card(props) {
  return (
    <div>
      <h1>hello everyone</h1>
      <p> this is me</p>
      <p>my name is {props.name} my age is {props.age} </p>
    </div>
  )
}

export default Card
