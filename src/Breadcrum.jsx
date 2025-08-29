import "./Breadcrum.css";

import ArrowIcon from "./assets/Pages/arrowicon.png";
const Breadcrum=(props)=>{
    const {product}=props;
    return (
        <div className="breadcrum">
            HOME <img src={ArrowIcon} alt="arrow icon"/>SHOP <img src={ArrowIcon} alt="arrow icon" />{product.category} <img src={ArrowIcon} alt="arrow icon" />{product.name}
        </div>
    );

}
export default Breadcrum;