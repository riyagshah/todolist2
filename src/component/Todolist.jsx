import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Todoitem } from './Todoitem'

export const Todolist = (props) => {
  return (
      <>
    {props.todos.map((item)=>(<Todoitem key={uuidv4()} item={item} markascomplate={props.markascomplate}/>))}
      </>
  )
}