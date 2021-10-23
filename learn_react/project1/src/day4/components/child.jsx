import { connect } from 'react-redux'
function Child(props) {
  return <h2>儿子组件使用count:{props.count}</h2>
}

Child = connect(state => {
  return {
    count: state.count
  }
})(Child)

export default Child