import React, { Component } from 'react';
import apple from "../../Images/Laptop/apple.png";
import hp from "../../Images/Common/hp.png";
import msi from "../../Images/Common/msi.png";
import toshiba from "../../Images/Common/toshiba.png";
import '../../css/trending-in.css';
import { Link } from 'react-router-dom';

const images = [apple, hp, msi, toshiba];

class TrendingIn extends Component {

    render() {
        return (
            <div className="trending-in-container">
                <h2>Trending Brands in Laptop</h2>
                <div className="trending-in">
                    {images.map((item, index) =>
                        <div className="trending-home-container" key={index}>
                            <Link to="/search/laptops"><img src={item} alt={item} /></Link>
                        </div>
                    )}
                </div>
            </div>

        );
    }
}

export default TrendingIn;