import React, { Component } from 'react';
import '../componentcss/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div id="hbheader">
                        <a href="/" className="logohb" style={{textDecoration:"none"}}>HBlog</a>
                            <ul className="navlinks">
                                <li><a href="/kategoriler">Kategoriler</a></li>
                                <li><a href="/sonyazilar">Son Yazılar</a></li>
                                <li><a href="#">İletişim</a></li>
                            </ul>
                    <button className="speciallink" href="#">Hakkımızda</button>
                </div>
            </div>
        )
    }
}
export default Navbar;