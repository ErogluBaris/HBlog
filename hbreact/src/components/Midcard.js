import React, { Component } from 'react'
import '../componentcss/Midcard.css';

class Midcard extends Component {
    render() {
        const {Image, Title, Note} = this.props;
        return (
            <div className="col mb-4" id="bigpicture-card">
                <a href="#">
                <div className="card h-100"> 
                    <img src={Image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <div className="card-title">
                            <h6>{Title}</h6>
                        </div>
                        <p className="card-text"><small className="text-muted">{Note} yazı mevcut</small></p>
                    </div>
                </div>
                </a>
            </div>
        )
    }
}
export default Midcard;