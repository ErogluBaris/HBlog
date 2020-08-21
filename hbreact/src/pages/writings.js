import React, { Component } from 'react';
import Writing from '../components/Writing';
import '../componentcss/pagecss.css/writings.css';

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
                <h1 style={{marginTop:"2vh", marginBottom:"2vh"}}>Başlık</h1>
                <div className="back-img">
                        
                </div>
                <div className="row row-cols-1 row-cols-md-1" style={{display:"flex", justifyContent:"center"}} id="main-writings">    
                    <div className="col">
                        {   
                            Object.entries(this.state.boxes).map(value => (
                                <Writing Title={value[1].title} Text={value[1].text} Writer={value[1].writer} Image={value[1].image} Time={value[1].time} Link={"/"+value[1].id}/>
                            ))
                        }
                    </div>
                    <div className="col"><Writing/></div>
                    <div className="col"><Writing/></div>
                    <div className="col"><Writing/></div>
                    <div className="col"><Writing/></div>
                </div>


            </div>
                
                
        )
    }
}
export default writings;