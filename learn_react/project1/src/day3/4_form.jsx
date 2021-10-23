import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';

let FormContext = React.createContext();
let ItemContext = React.createContext()
function Form(props) {
  let { initialValues, onFinish, children } = props;
  return <FormContext.Provider value={{ initialValues, onFinish }}>
    <div className='form_box'>
      {children}
    </div>
  </FormContext.Provider>
}
function Item(props) {
  let { label, name, children } = props;
  let context = useContext(FormContext)
  console.log(context)
  return <ItemContext.Provider value={{ label, name, }}>
    item组件:{children}
  </ItemContext.Provider>

}
Form.Item = Item;
function Input() {
  let item = useContext(ItemContext)
  let form = useContext(FormContext)
  console.log(item, form)
  let [val, setVal] = useState(0)
  return <div>
    {item.label}<input type="text" value={form.initialValues[item.name]} onChange={(e) => {
      form.initialValues[item.name] = e.target.value
      setVal(Math.random())
    }} />
  </div>
}
function Button(props) {
  let form = useContext(FormContext)
  return <>
    <button onClick={(e) => { form.onFinish(e) }}>{props.children}</button>
  </>
}

class App extends React.Component {
  state = {
    initValue: {
      name: "珠峰",
      age: 12
    }
  }
  onFinish = () => {
    console.log('点击了提交', this.state.initValue)
  }
  render() {
    return <div className=''>
      <Form
        initialValues={this.state.initValue}
        onFinish={this.onFinish}
      >
        <Form.Item
          label="用户名"
          name="name">
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age">
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button>提交</Button>
        </Form.Item>
      </Form>
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'))