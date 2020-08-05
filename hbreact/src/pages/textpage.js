import React, { Component } from 'react'
import BlogText from '../components/BlogText';
import Referencecard from '../components/Referencecard';

class textpage extends Component {
    render() {
        const {params} = this.props.match
        return (
            <div className="row">
                <div className="content">
                    <BlogText id={params.id}/>
                    <Referencecard/>
                </div>
            </div>
                
        )
    }
}
export default textpage;