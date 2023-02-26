import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/footer-navi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck,faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import APP_LOGO_WHITE from "../../Icons/app-logo-white.gif";

class FooterNavi extends Component {
    leftNavi=[
        'Contact Us',
        'FAQ',
        'T&C',
        'Terms Of Use',
        'Track Orders'
    ];
    naviMid=[
        'Shipping',
        'Cancellation',
        'Returns',
        'Privacy policy',
        'Site Map'
    ];
    
    state = { 
        leftNavi:[],
        naviMid:[]
    }
    componentDidMount(){
        const leftNavi=[...this.leftNavi];
        const naviMid=[...this.naviMid];
        this.setState({leftNavi,naviMid});
    }

    render() {
        const {leftNavi,naviMid}=this.state;        
        return (
            <div className="footer-container">
                <div className="left-navi">
                    {leftNavi.map((item,index)=>
                        <Link className="footer-navi-link" to="" key={index}>{item}</Link>
                    )}           
                </div>
                <div className="mid-navi">
                    {naviMid.map((item,index)=>
                        <Link className="footer-navi-link" to="" key={index}>{item}</Link>
                    )}           
                </div>
                <div >
                    <Link to=""className="footer-logo">
                        <h2>FST</h2>
                        <img src={APP_LOGO_WHITE} alt="Register screen white logo" />
                    </Link>
                </div>
                <div className="right-navi">
                    <div>
                        <span className="fontawsm-logo">
                            <FontAwesomeIcon icon={faBalanceScale} className="fontawsm"/>
                            <h4>100% ORIGINAL</h4>
                        </span>
                        <h5>guarantee for all products at electro cigma</h5>
                    </div>
                    <div>
                        <span className="fontawsm-logo">
                            <FontAwesomeIcon icon={faTruck} className="fontawsm"/>
                            <h4>Return within 30days</h4>
                        </span>
                        <h5>of receiving your order</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterNavi;