import React, { Component } from 'react';

class writings extends Component {
    componentDidMount() {
        this.sendData()
    }
    async sendData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ category: this.props.categ}),
        };
        try {
            const url = '/category'
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            if (data["response"] === "Failure") {
                window.alert("An error has occurred. Please try again later")
            }
            else {
                console.log("Message received..")
                this.setState({
                    boxes: data
                })
            }
        } catch (error) {
            window.alert("API server might not be working. Please check API or contact us.")
        }
    }
    render() {
        return (
            <div className="row">
                <div className="row row-cols-1 row-cols-md-2" id="last-card-grid">
                    {
                        Object.entries(this.state.boxes).map(key => (
                            <Writing Title={key[1].title} Text={key[1].text} Writer={key[1].writer} Image={key[1].image} Time={key[1].time} Link={"yazilar/"+key["0"]}/>
                        ))
                    }
                </div>
            </div>
                
        )
    }
}
export default writings;