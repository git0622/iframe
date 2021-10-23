// import React from 'react';
// import ReactDOM from 'react-dom';

// let html = <div className='box' style={{ color: 'red' }}>
//   <h1>hello</h1>
//   <h2>world</h2>
// </div>

class Element {
  constructor(type, attrs, children) {
    this.type = type;
    this.attrs = attrs || {};
    this.children = children
  }
  str(str) {
    return str.replace(/[A-Z]/g, (aa) => {
      return '-' + aa.toLowerCase()
    })
  }
  objToStr(obj) {
    let str = '';
    Object.keys(obj).forEach(key => {
      str += `${this.str(key)}:${obj[key]};`
    })
    return str
  }
  render() {
    // 负责生产正式DOM
    let ele = document.createElement(this.type)
    // attrs:{ className: "box", style: { color: 'red' } }
    Object.keys(this.attrs).forEach(key => {
      // ele.setAttribute(key, this.attrs[key])
      switch (key) {
        case 'className':
          ele.setAttribute('class', this.attrs[key])
          break;
        case 'style':
          ele.setAttribute('style', this.objToStr(this.attrs[key]))
          break;
        default:

          ele.setAttribute(key, this.attrs[key])
          break;
      }
    })
    this.children.forEach(child => {
      // child 有可能是一个字符串  也有可能是一个React.createElement的返回结果（Element的实例）
      if (typeof child == 'string') {
        // 根据字符串产生一个文本节点
        let node = document.createTextNode(child);
        ele.appendChild(node)
      } else {
        // child是一个Element的实例
        ele.appendChild(child.render())
      }
    })
    return ele
  }
}

const React = {
  createElement(type, attrs, ...children) {
    return new Element(type, attrs, children)
  }
}
const ReactDOM = {
  render(instance, container) {
    container.appendChild(instance.render())
  }
}

let html = React.createElement('div', { className: "box", style: { color: 'red', fontSize: '40px' } },
  React.createElement('h1', null, 'hello'),
  React.createElement('h2', null, 'world'),
)
ReactDOM.render(html, document.getElementById('root'))