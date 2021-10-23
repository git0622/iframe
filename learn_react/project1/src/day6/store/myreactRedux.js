import React,{useContext,useEffect,useState} from 'react'

const  Context = React.createContext();
export function connect(mapStateToprops,mapDispatchToProps){
  return function (Comp){
    return class Temp extends React.Component{
      // 所有的Temp组件 都可以通过上下文来获取store
      static contextType = Context
      componentDidMount(){
        this.clear = this.context.store.subscribe(()=>{
          this.setState({})
        })
      }
      componentWillUnmount(){
        this.clear()
      }
      // this.context.store
      render(){
        return <Comp 
        {...this.props}
        {...mapStateToprops(this.context.store.getState())}
        {...(mapDispatchToProps?mapDispatchToProps(this.context.store.dispatch):{})}
        />
      }
    }
  }
}

// Provider 是所有经过connect处理过的组件的祖宗组件
export class Provider extends React.Component{
  render(){
    let {children,store} = this.props;
    return <Context.Provider value={{store:store}}>
      {children}
    </Context.Provider>
  }
}

export function Provider2(props){
  let {store,children} = props;
  return <Context.Provider value={{store:store}}>
      {children}
    </Context.Provider>
}

// export function connect2(mapStateToprops,mapDispatchToProps){
//   return function (Comp){
//     return function useAAA(props){
//       let context = useContext(Context)
//       let [n,setN] = useState(0)
//       useEffect(()=>{
//         let clear = context.store.subscribe(()=>{
//           useState(n+1)
//         })
//         return clear
//       },[])
//       return <Comp 
//         {...props}
//         {...mapStateToprops(context.store.getState())}
//         {...(mapDispatchToProps?mapDispatchToProps(context.store.dispatch):{})}
//         />
//     }
//   }
// }