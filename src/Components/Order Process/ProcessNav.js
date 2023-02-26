import React, { Component } from 'react';
import { faShoppingCart, faAddressBook, faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import APP_LOGO_BLACK from "../../Icons/app-logo-black.gif";

class ProcessNav extends Component {
    
    render() {
        const{progress}=this.props;
        return (
            <div className="order-process-nav">
                <div className="order-process-nav-sub1">
                    <Link
                        to="/"
                        className="logo-container">
                        <img src={APP_LOGO_BLACK} className="application-logo" />
                    </Link>
                </div>
                <div className="order-process-nav-sub2">
                    <div className="progress-bar">
                        <div className="progress-bar"/>
                        <div className={`address-progress ${progress>0? "progress-visible":""}`}/>
                        <div className={`delivery-progress ${progress>1? "progress-visible":""}`}/>
                    </div>
                   <FontAwesomeIcon className={progress>=0?"progress-color":""} icon={faAddressBook} />
                   <FontAwesomeIcon className={progress>=1?"progress-color":""} icon={faShoppingCart} />
                   <FontAwesomeIcon className={progress>=2?"progress-color":""} icon={faCheckSquare} />
                </div>
            </div>
        );
    }
}

export default ProcessNav;