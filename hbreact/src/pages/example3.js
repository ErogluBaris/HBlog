import React, { Component } from 'react'
import BlogText from '../components/BlogText';
import Referencecard from '../components/Referencecard';

export default class example3 extends Component {
    render() {
        return (
            <div className="row">
                <div className="content">
                    <BlogText text={"wwf"}/>
                    <Referencecard/>
                </div>
            </div>
                
        )
    }
}
