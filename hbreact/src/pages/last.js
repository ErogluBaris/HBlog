import React, { Component } from 'react';
import Writing from '../components/Writing.js';
import { Link } from 'react-router-dom';

class last extends Component {
    render() {
        return (
            <div id="last">
                <h1>Son Yazılar</h1>
                <div className="row row-cols-1 row-cols-md-2" id="last-card-grid">
                    <Writing Title="World Wildlife Fund" Text="What is World Wildlife Fund, History of World Wildlife Fund, Creation of Panda Logo
                                    Works of WWF, Emerging Threats to Nature and Living Planet Report 2018" Writer="Hacer UYANIK" Image="https://i.pinimg.com/originals/e0/cb/19/e0cb193feb0b23b8961bb1a751f0ff77.jpg" Time="4" Link="/example"/>
                    
                    <Writing Title="İslamda Eşcinsellik ve Çeçenistan'daki Gay Kampları" Text="İslam’da Eşcinsellik, Çeçenistan’daki Gey Tecrit Kampları ve Homofobinin Görünür Eli"
                                Writer="Hacer UYANIK" Image="https://gmag.com.tr/wp-content/uploads/2017/07/170503-chechnya-gay-attacks-embed2.jpg" Time="2"  Link="/example2"/>
                    <Writing Title="Türk Siyasi Yaşamı ve Sorunları" Text="İktisadi, Kültürel ve Siyasi Dönüşüm; Müzmin Toplumsal Çatışma; Siyasal İslam’ın Kademeli Yükselişi; Erdoğan ve İmaj Siyaseti"
                                Writer="Hacer UYANIK" Image="https://miro.medium.com/max/1000/1*OsmcJ4tkWwPUX5EI8MC50A.jpeg" Time="1"  Link="/example4"/>
                    <Writing/>
                    <Writing/>
                    <Writing/>
                </div>
            </div>
        )
    }
}
export default last;