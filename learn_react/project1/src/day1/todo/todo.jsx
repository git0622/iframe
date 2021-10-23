import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Input from './input'
import List from './list'
function App() {
  let [list, setList] = useState([{ id: Math.random(), text: "测试" }]);
  let [todo, setTodo] = useState('');
  const del = (item) => {
    let temp = list.filter(val => val.id != item.id)
    setList(temp)
  }
  const submit = () => {
    let temp = [...list]
    temp.unshift({
      id: Math.random(),
      text: todo
    })
    // list.unshift({
    //   id: Math.random(),
    //   text: todo
    // })
    setList(temp)
    setTodo('')
  }
  return <>
    <Input
      value={todo}
      onChange={(e) => { setTodo(e.target.value) }}
      placeholder="hello"
      onKeyDown={(e) => {
        if (e.keyCode == 13) {
          submit()
        }
      }}
    />
    <List data={list} onDel={del} www={item => {
      return <h1>{item.text}</h1>
    }} />
  </>
}

ReactDOM.render(<App />, document.getElementById('root'))