import React, { Component } from 'react';
import laptop from "../../Images/laptop.jpeg";
import apple from "../../Images/Laptop/apple.png";
import hp from "../../Images/Common/hp.png";
import asus from "../../Images/Common/asus.png";
import msi from "../../Images/Common/msi.png";
import lenovo from "../../Images/Common/lenovo.png";
import dell from "../../Images/Common/dell.png";
import acer from "../../Images/Common/acer.png";
import toshiba from "../../Images/Common/toshiba.png";

import "../../css/appliances.css";

const brands = ['apple', 'Hp', 'Dell', 'Asus', 'MSI', 'Lenovo', 'Acer', 'Toshiba'];
const images = [apple, hp, dell, asus, msi, lenovo, acer, toshiba];

class Laptop extends Component {

    render() {
        return (
            <div className="appliances-container">
                <div className="appliances-cover">
                    <img src={laptop} alt="appliances-cover" />
                    <div>
                        <h4>Macbook M1 Pro</h4>
                        <h5>More power.</h5>
                        <h5>More performance.</h5>
                        <h5>More pro.</h5>
                    </div>
                </div>
                <h2>Top Brands Available</h2>
                <div className="appliance-brand-container">
                    {brands.map((i, index) => (
                        <div onClick={()=>this.props.history.push("/search/laptops")} key={i} className="appliance-brand-sub-container">
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

export default Laptop;