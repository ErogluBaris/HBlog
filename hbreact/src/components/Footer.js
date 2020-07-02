import React, { Component } from 'react'
import '../componentcss/Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-sm-4" id="introduction">
                        <h4>Tanıtım yazısı küçük</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their 
                            H. Rackham</p>
                    </div>
                    <div className="col-sm-4" id="links">
                        <h4>Linkler</h4>
                        <ul>
                            <li><a href="#">Kategoriler</a></li>
                            <li><a href="#">Son Yazılar</a></li>
                            <li><a href="#">Popüler Yazılar</a></li>
                            <li><a href="#">Yazmak İstiyorum</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-4" id="social">
                        <h4>Sosyal Medya</h4>
                        <div className="social-logos">
                            <a href="www.google.com"><i className="fa fa-twitter"></i></a>
                            <a href="instagram.com"><i className="fa fa-instagram"></i></a>
                            <a href="facebook.com"><i className="fa fa-facebook"></i></a>
                            <a href="linkedin.com"><i className="fa fa-linkedin"></i></a>
                            <a href="pinterest.com"><i className="fa fa-pinterest"></i></a>
                        </div>
                    </div>
                </div>

            </footer>
        )
    }
}
export default Footer;