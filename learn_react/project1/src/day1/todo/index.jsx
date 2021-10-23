import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {

  let [list, setList] = useState([{ id: Math.random(), text: "测试" }]);
  let [todo, setTodo] = useState('');
  const del = (item) => {
    let temp = list.filter(val => val.id != item.id)
    setList(temp)
  }
  const submit = () => {
    let temp = [...list]
    temp.unshift({ id: Math.random(), text: todo })
    setList(temp)
    setTodo('')
  }
  return <>
    <input
      type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onKeyDown={(e) => { if (e.keyCode == 13) { submit() } }} />
    <ul>
      {
        list.map(item => {
          return <li key={item.id}>{item.text} <button onClick={() => { del(item) }}>X</button></li>
        })
      }
    </ul>
  </>
}

ReactDOM.render(<App />, document.getElementById('root'))