import React, { Component } from 'react';
import Midcard from '../components/Midcard';
import '../componentcss/pagecss.css/categories.css';

class categories extends Component {
    render() {
        return (
            <div className="content" id="category">
                <h1>Kategoriler</h1>
                <div className="row row-cols-1 row-cols-md-4">
                    <Midcard Image={"https://wallpapers-hd-wide.com/wp-content/uploads/2016/02/earth_tree_birds_green_ecology_minimalism-1920x1080-660x371.jpg"} Title={"Çevre"} Note={1}/>
                    <Midcard Image={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/1200px-Gay_Pride_Flag.svg.png"} Title={"LGBT"} Note={1}/>
                    <Midcard Image={"https://www.glokalweb.com/images/24533feminizm-jpg.png"} Title={"Feminizm"} Note={0}/>
                    <Midcard Image={"https://patientengagementhit.com/images/site/article_headers/_normal/GettyImages-CommunityHealth.jpg"} Title={"Sağlık"} Note={0}/>
                    <Midcard Image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVm3ebctid-rYPs1rIbGhTAXDh2O8GAejezA&usqp=CAU"} Title={"Tarih ve Siyaset"} Note={0}/>
                    <Midcard Image={"https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_5d1ca4198fff61562158105.png"} Title={"Teknoloji"} Note={0}/>
                </div>
            </div>
        )
    }
}
export default categories;