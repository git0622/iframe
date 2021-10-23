import React from 'react';
import A from './a'
class About extends React.Component {
    render() {
        console.log('acout', this.props)
        return <div className=''>
            About
            <A></A>
        </div>;
    }
}
export default About