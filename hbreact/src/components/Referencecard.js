import React, { Component } from 'react';
import ReactHTMLParser from 'react-html-parser';
import '../componentcss/BlogText.css';

var ref = "<ol><li>How is Wwf run?: <a target='blank' href='http://wwf.panda.org'>http://wwf.panda.org</a></li><li>Midway Island and seabirds: <a href='http://edition.cnn.com'>http://edition.cnn.com</a></li><li>How can we do for protecting nature: <a href='http://www.hyperbiotics.com'>http://www.hyperbiotics.com</a></li><li>History of Wwf:<a href='http://www.worldwildlife.org'>http://www.worldwildlife.org</a></li><li>Creation of panda logo: <a href='http://www.creativereview.co.uk'>http://www.creativereview.co.uk</a></li><li>Macekura, Stephen (2015) Of limits and growth: The rise of global sustainable development in the twentieth century </li><li><a href='http://www.akademikkaynak.com'>http://www.akademikkaynak.com</a></li></ol>"

class Referencecard extends Component {
    render() {
        return (
            <div className="card" id="referenceCard">
                <div className="card-body" id="references">
                    <h4>References</h4>
                    {ReactHTMLParser (ref)}
                </div>
            </div>
        )
    }
}
export default Referencecard;