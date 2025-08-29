import "./Popular.css";
import Item from "./Item.jsx";
import data from "./data";
const Popular =()=>{
    const allImages=[...data,...data,...data,...data,...data];
    return(
        <div className="popular">
              <h1> OUR POPULAR PRODUCTS</h1>
              <hr/>
              <div className="popular-item">
                {allImages.map((item,i)=>{
                    return <Item className="Images"key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                })}
              </div>
        </div>
    );

}
export default Popular;