import React, { Component } from 'react';
import ReactHTMLParser from 'react-html-parser';
import '../componentcss/BlogText.css';


class BlogText extends Component {
    state={
        blogtext: "hello"
    }
    componentDidMount() {
        this.sendData()
    }
    async sendData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({category:this.props.categ, id: this.props.id}),
            
        };
        try {
            const url = '/getText'
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            if (data["response"] === "Failure") {
                window.alert("An error has occurred. Please try again later")
            }
            else {
                console.log("Message received..")
                this.setState({
                    blogtext: data["response"]
                })
                console.log(data["response"]);
            }
        } catch (error) {
            window.alert("API server might not be working. Please check API or contact us.")
        }
    }

    render() {
        const {categ, id} = this.props;
        return (
                <div className="row">
                    <div className="content">
                        {ReactHTMLParser(this.state.blogtext)}
                    </div>
                </div>
        )
    }
}
export default BlogText;