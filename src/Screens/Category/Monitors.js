import React, { Component } from 'react';
import monitorimg from "../../Images/monitor.jpg";
import alien from '../../Images/Common/alien.jpg';
import acer from '../../Images/Common/acer.png';
import lg from '../../Images/Common/lg.png';
import samsung from '../../Images/Common/samsung.png';
import msi from "../../Images/Common/msi.png";
import benq from "../../Images/Common/benq.png";
import asus from "../../Images/Common/asus.png";
import hp from "../../Images/Common/hp.png";

import "../../css/appliances.css";

const brands = ['AlienWare', 'Acer', 'LG', 'Samsung', 'MSI', 'Benq', 'Asus', 'Hp'];
const images = [alien, acer, lg, samsung, msi, benq, asus, hp];

class Monitors extends Component {
    state = {}
    render() {
        return (
            <div className="appliances-container">
                <div className="appliances-cover">
                    <img src={monitorimg} alt="appliances-cover" />
                    <div>
                        <h4>PERMAPRESS</h4>
                        <h5>A more smooth GAME with US</h5>
                    </div>
                </div>
                <h2>Top Brands Available</h2>
                <div className="appliance-brand-container">
                    {brands.map((i, index) => (
                        <div onClick={()=>this.props.history.push("/search/monitors")} key={i} className="appliance-brand-sub-container">
                            <div>
                                <img src={images[index]} alt={i} />
                            </div>
                            <h5>{i}</h5>
                        </div>
                    ))}

                </div>
            </div>
        );
    }
}

export default Monitors;