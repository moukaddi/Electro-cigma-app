import React, { Component } from 'react';
import appliances from "../../Images/appliances.jpeg";
import samsung from '../../Images/Common/samsung.png';
import whirlpool from '../../Images/appliances/whirlpool.png';
import smeg from '../../Images/appliances/smeg.png';
import lg from '../../Images/Common/lg.png';
import frigidaire from '../../Images/appliances/kitchenaid.png';
import gag from '../../Images/appliances/gag.png';

import "../../css/appliances.css";

const brand = ['Samsung', 'Whirlpool', 'Smeg', 'LG', 'Frigidaire', 'Gaggenau'];
const images = [samsung, whirlpool, smeg, lg, frigidaire, gag];

class Smart extends Component {
    state = {}
    render() {
        return (
            <div className="appliances-container">
                <div className="appliances-cover">
                    <img src={appliances} alt="appliances-cover" />
                    <div>
                        <h4>Whirlpool</h4>
                        <h5><span>Why Convert,</span> When You Can Adapt</h5>
                    </div>
                </div>
                <h2>Best Selling Brands</h2>
                <div className="appliance-brand-container">
                    {brand.map((i, index) => (
                        <div onClick={()=>this.props.history.push("/search/smart")} key={i} className="appliance-brand-sub-container">
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

export default Smart;