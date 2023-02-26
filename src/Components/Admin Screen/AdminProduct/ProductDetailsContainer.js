import React, { Component } from 'react';
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen} from '@fortawesome/free-solid-svg-icons';
import loading from '../../../animations/loading.json';

class ProductDetailsContainer extends Component {
    render() {
        const {toggleTrend,submitTrendingId,submitTrending,handleProductEdit,handleStockEdit,handleTrending,item}=this.props;
        return (
            <tr className="admin-product-details-container">
                <td>
                    <h2>{(item.title).toLowerCase()}</h2>
                    <FontAwesomeIcon icon={faPen} onClick={()=>handleProductEdit(item)} className="product-details-edit-icon"/>
                    <h3>{item.category}</h3>
                    <h4>{item.price} DH</h4>
                </td>

                <td>
                    <FontAwesomeIcon icon={faPen} onClick={()=>handleStockEdit(item)} className="product-edit-icon"/>
                    <h3 className="item-stock">{item.inStock}</h3>
                </td>
                    
                <td>
                    <h2>
                        { ( item.id===submitTrendingId && submitTrending) &&
                            <Lottie className="trending-submit-icon" animationData={loading} /> }
                    </h2>
                    <div className="trend-toggle-icon">
                        <div ref={toggleTrend} className={item.trending?"toggle-trending":""} onClick={()=>handleTrending(item.id)}>
                            <span className={`${item.trending ?"toggle-trending-round":""}`}/>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default ProductDetailsContainer;