import React from "react";

function ProductReviews({ productreviews }) {
    return (
        <>
            <div className="ProductReviews">
                {
                    productreviews.map((item, index) => (
                        <div className="ProductReviewCard">
                            <img src={item.image} alt={`${index} review`} />
                            <h5>{item.review}</h5>
                            <span>{item.name}</span>
                            <b>{item.price}</b>
                        </div>
                    ))
                }


            </div>
        </>
    )
} export default ProductReviews;