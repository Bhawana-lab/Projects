
import "./NewCollection.css";
import new_collection from"./new_collection.js"; 
import Item from "./Item.jsx";
const NewCollection=()=>{
    return (
        <div className="new-herb-collections">
            <h1>FRESH NATURAL & HOME MADE PRODUCTS</h1>
            <hr/>
            <div className="collections">
                {new_collection.map((item,i)=>{
                          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                })}
            </div>
        </div>
    );
}
export default NewCollection;