import React, { Component } from 'react';
import ProductStars from './ProductStars';
import { faAngleDoubleDown,faLock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from "lottie-react";
import loading from '../../animations/smallLoad.json';

class ProductReviewContainer extends Component { 

    render() {
        const {handleLogin,user,displayReviewError,reviewSubmit,overallRating,loadedReview,handleLoadMore,userReview,onChange,review,handleReviewSubmit,...rest}=this.props;
        const totalReviews=userReview.usersReviews.length;
        const visibleReviews=loadedReview.length;
        return (
            <>
                <h2>Customer Reviews</h2>
                <div className="reviews-sub-container">
                    <div className="reviews-sub-container-rating">
                        <h3>{overallRating} <span>out of 5</span></h3>
                        <h5>{`${totalReviews} ratings`}</h5> 
                        <div>
                            <ProductStars starRatedColor="orange" rating={overallRating} starDimension="25px" starSpacing="1px"/>
                        </div>
                    </div>
                    <div className="reviews-sub-container-review">
                        {!user && <div className="reviews-sub-container-review-cover">
                            <FontAwesomeIcon className="reviews-sub-container-lock" icon={faLock} />
                            <h2>Login to submit review</h2>
                            <button onClick={handleLogin}>Login</button>
                        </div>}
                        <div className={!user?"reviews-sub-container-review-cover-blur":""}>
                            <h4>Write your review</h4>
                            <div className="star-rating-container">
                                <h5 className="star-rating-error">Please enter the rating</h5>
                                <ProductStars starDimension="30px" starSpacing="1px" starRatedColor="orange" {...rest}/>
                            </div>
                            <textarea value={review} onChange={onChange} placeholder="Enter the review (max character: 255)" maxLength={255} rows={4}/>
                            <div className="review-btn-container">
                                <h5>You have already submitted the review</h5>
                                {displayReviewError && <h4>An unknown error occured. Couldn't submit the review. Try again</h4>}
                                <span>Required minimum 10 characters</span>
                                <button onClick={handleReviewSubmit}>
                                    {reviewSubmit && <Lottie className="loading-on-review-submit" animationData={loading} loop autoPlay/>}
                                    <h3 className={reviewSubmit?"review-btn-container-loading-preview":""}>Submit</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-user-reviews">
                    {loadedReview.map((i,index)=>(
                        <div className="all-user-reviews-sub-container" key={index}>
                            <div className="each-review-sub-container">
                                <span className="review-avatar">{i.name.charAt(0)}</span>
                                <div className="each-star">
                                    <span>{i.name}</span>
                                    <ProductStars rating={i.rating} starDimension="15px" starSpacing="1px" starRatedColor="orange" />
                                </div>
                            </div>
                            <h5>{i.review}</h5>
                        </div>
                    ))}
                    {totalReviews>visibleReviews && <div onClick={handleLoadMore} title="Load more reviews" className="review-load-more">
                            <FontAwesomeIcon className="review-load-icon" icon={faAngleDoubleDown}/>
                        </div>
                    }
                </div>
            </>
        );
    }
}

export default ProductReviewContainer;