/* 
     当我们调用dispatch的时候  redux会让所有的reducer挨个执行
     这样的执行方式 会导致 不同reducer下的相同的type都会满足条件


*/


import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import { Provider } from 'react-redux'
import A from './components/A'
import B from './components/B'
class App extends React.Component {

    render() {
        return <div className=''>
            <A />
            <B />
        </div>;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))