import React, { Component } from 'react';
import Midcard from './Midcard';
import '../componentcss/Suggestions.css';

class Suggestions extends Component {
    state = {
        isVisible : true
    }

    showDown = (e) =>{
        console.log(this.state.isVisible);
        this.setState({
            isVisible : !this.state.isVisible
        })
    }
    render() {
        const {isVisible} = this.state
        return (
            <div className="content">
            <div className="Suggestion">
                <div className="row">
                        <div className="card"  id="SuggestCard">
                            <div className="card-header d-flex justify-content-between"  id="Sugbutton" onClick={this.showDown}>
                                <h4 className="d-inline">Öneriler</h4>
                                {
                                    isVisible ?
                                <i className="fas fa-angle-up icon-5x"></i>:
                                <i className="fas fa-angle-down icon-5x"></i>
                                }
                            </div>
                        </div>
                        
                        </div>
                </div>
            </div>
        )
    }
}
export default Suggestions;