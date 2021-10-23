import * as types from '../action-types'
export function addTodo(todo) {
  return { type: types.ADD, todo: todo }
}

export function removeTodo(id123) {
  return { type: types.REMVOE, id: id123 }
}