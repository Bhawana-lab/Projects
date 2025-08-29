import React from "react";
import "./DescriptionBox.css";
const DescriptionBox=()=>{
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (1k)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Really impressed with the quality of these organic herbs- fresh, aromatic, and exactly what we needed!</p>
                <p>We’ve ordered a few times now and the herbs are always top-notch- clean, potent, and well-packed.</p>
                <p>Always happy with our purchase – the herbs are fresh, chemical-free, and arrive quickly.</p>
                <p>These organic herbs have become a staple in our kitchen– love the purity and rich flavor!</p>
                <p>Great experience! The herbs smell amazing and feel truly natural– definitely coming back for more.</p>
            </div>
        </div>
    );
};
export default DescriptionBox;