import React, { Component } from 'react';
import AccessorieImg from "../../Images/accessorie.jpg";
import razer from "../../Images/Accessorie/razer.png";
import msi from "../../Images/Common/msi.png";
import benq from "../../Images/Common/benq.png";
import asus from "../../Images/Common/asus.png";
import hp from "../../Images/Common/hp.png";
import pentax from "../../Images/Accessorie/pentax.png";
import dell from "../../Images/Common/dell.png";


import "../../css/appliances.css";

const brands = ['Razer', 'MSI', 'Asus', 'Pentax', 'Benq', 'Hp', 'Dell'];
const images = [razer, msi, asus, pentax, benq, hp, dell];

class Accesoires extends Component {

    render() {
        return (
            <div className="appliances-container">
                <div className="appliances-cover">
                    <img src={AccessorieImg} alt="appliances-cover" />
                    <div>
                        <h4>Set-up</h4>
                        <h5>Take A Sneak Peek into Everything New</h5>
                    </div>
                </div>
                <h2>Top Brands Available</h2>
                <div className="appliance-brand-container">
                    {brands.map((i, index) => (
                        <div onClick={()=>this.props.history.push("/search/accesoires")} key={i} className="appliance-brand-sub-container">
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

export default Accesoires;