import { useState } from "react"
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../store/reducers/B_actions'
function B(props) {
  let [todo, setTodo] = useState('')
  let { list, add, remove } = props;
  return <>
    <hr></hr>
    <h1>B组件</h1>
    <input type="text" value={todo} onChange={(e) => { setTodo(e.target.value) }} onKeyDown={e => {
      if (e.keyCode == 13) {
        add({ id: Math.random(), text: todo })
        setTodo('')
      }
    }} />
    <ul>
      {
        list.map(item => {
          return <li key={item.id}>{item.text} <button onClick={() => { remove(item.id) }}>X</button></li>
        })
      }
    </ul>

  </>
}
B = connect(state => {
  return {
    list: state.B.list
  }
}, dispatch => {
  return {
    add(obj) {
      dispatch(addTodo(obj))
    },
    remove(id) {
      dispatch(removeTodo(id))
    }
  }
})(B)

export default B