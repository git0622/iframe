import React from 'react';
class Child extends React.Component {
  del(n) {
    // let temp = [...this.props.data];
    // temp.splice(n, 1)

    // this.props.data = temp
    this.props.qqq(n)
  }
  render() {
    let { data = [] } = this.props;
    return <div className=''>
      <h2>子组件</h2>
      <ul>
        {
          data.map((item, index) => {
            return <li key={item.name}>
              名字：{item.name}<br />
              年龄：{item.age}
              <button onClick={() => { this.del(index) }}>X</button>
            </li>
          })
        }
      </ul>
    </div>;
  }
}

function Child2(props) {
  let { data = [], children, render } = props;
  const del = (n) => {
    props.onDel(n)
  }
  return <div className=''>
    <h2>子组件</h2>
    {children}
    <ul>
      {
        data.map((item, index) => {
          return <li key={item.name}>
            {
              render ?
                render(item) :
                <span>名字：{item.name}<br />
            年龄：{item.age}</span>
            }
            <button onClick={() => { del(index) }}>X</button>
          </li>
        })
      }
    </ul>
  </div>;
}
export default Child2