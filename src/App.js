import React from 'react';
import './App.css';
import { Todo } from './component/Todo';
import { Todolist } from './component/Todolist';

function App() {
  const [todo, settodo]= React.useState([])
  

  const todoinput=(str)=>{
    settodo([...todo ,{ id: Date.now(), iscomplate: false, value: str }])
  }

  const markascomplate =(id,statas)=>{
    console.log("markascomplate" ,id);
    
    todo.map((element)=>{
      if(element.id===id){
        element.iscomplate=statas;
        
      }
      return 0;
    })

    settodo(todo)
  }

  return (
    <div className="App">
    <h1>Todo List</h1>
    <Todolist todos={todo} markascomplate={markascomplate}/>
    <Todo  todoin={todoinput} />
    </div>
  );
}

export default App;