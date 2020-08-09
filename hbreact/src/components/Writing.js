import React, { Component } from 'react';
import '../componentcss/Writing.css';

class Writing extends Component {
    render() {
        const {Title, Text, Writer, Image, Time, Link} = this.props;
        return (
                <div className="card mb-2" style={{maxWidth: "540px"}} id="writing">
                    <a href={Link}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={Image} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{Title}</h5>
                                <p className="card-text" style={{overflow:"hidden", textOverflow:"ellipsis", whiteSpace: "nowrap"}}>{Text}</p>
                                <div className="text-muted"><cite>{Writer}</cite></div>
                                <p className="card-text"><small className="text-muted">{Time} dakika önce</small></p>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>
                
                
        )
    }
}
export default Writing;