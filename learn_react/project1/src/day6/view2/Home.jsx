import React from 'react';
class Home extends React.Component {
    render() {
        let query = {};
        this.props.location.search.replace(/([^?=&]+)=([^?=&]+)/g, function (a, b, c) {
            query[b] = c
        })
        console.log(query)
        return <div className=''>
            Home
            <button onClick={() => {
                setTimeout(() => {
                    this.props.history.push('/list')
                }, 2000);
            }}>2s</button>
        </div>;
    }
}
export default Home