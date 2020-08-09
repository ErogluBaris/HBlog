import React, { Component } from 'react';
import Writing from '../components/Writing';

class writings extends Component {
    constructor(props) {
        super(props)
        const {params} = props.match;
        this.state = {
            params: params,
            boxes: ""
        }
    }
    componentDidMount() {
        this.sendData()
    }
    async sendData() {
        console.log(this.state.params.categ)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ category: this.state.params.categ}),
        };
        try {
            const url = '/category'
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            if (data["response"] === "Failure") {
                window.alert("An error has occurred. Please try again later")
            }
            else {
                this.setState({
                    boxes: data
                })
                Object.entries(this.state.boxes).map(key=>{
                    console.log(key[1].id)
                })
            }
        } catch (error) {
            window.alert("API server might not be working. Please check API or contact us.")
        }
    }
    render() {
        return (
            <div>
                <h1>Başlık</h1>
                <div className="row row-cols-1 row-cols-md-2" style={{display:"flex", justifyContent:"center"}}>
                
                {   
                    Object.entries(this.state.boxes).map(value => (
                        <Writing Title={value[1].title} Text={value[1].text} Writer={value[1].writer} Image={value[1].image} Time={value[1].time} Link={this.state.params.categ+"/"+value[1].id}/>
                        
                    ))
                }
                </div>


            </div>
                
                
        )
    }
}
export default writings;