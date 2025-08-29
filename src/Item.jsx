//
// import {Link} from "react-router-dom";
// const Item=(props)=>{
//     return (
//         <div className="item">
//             <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="Products"/></Link>
//             <p>{props.name}</p>
//             <div className="item-prices">
//                 <div className="item-price-new"> ₹{props.new_price}</div>
//                 <div className="item-price-old"> ₹{props.old_price}</div>
//             </div>
//         </div>
//     );
// }
// export default Item;

import React from "react";
 import './item.css';
import { Link } from "react-router-dom";
import {Card,CardMedia,CardContent,Typography,Rating} from '@mui/material';
const Item = (props) => {
  return (
    <Card className="newcard item">
      <Link 
        to={`/product/${props.id}`} 
        onClick={() => window.scrollTo(0, 0)} 
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <CardMedia
          component="img"
          height="250"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {props.name}
          </Typography>
           <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Typography variant="body1" color="text.primary" fontWeight="bold">
              ₹{props.new_price}
            </Typography>
            <Typography variant="body2" color="gray" fontWeight={600} sx={{ textDecoration: 'line-through' }}>
              ₹{props.old_price}
            </Typography>
          </div>
        </CardContent>
      </Link>
      
    </Card>
  );
};

export default Item;





// import React from "react";
// import { Link } from "react-router-dom";
// import {Card,CardMedia,CardContent,Typography,CardActions,Box,Rating} from "@mui/material";

// const Item = (props) => {
//   return (
//     <Card className="newcard">
//       <Link
//         to={`/product/${props.id}`}
//         style={{ textDecoration: "none", color: "inherit" }}
//         onClick={() => window.scrollTo(0, 0)}
//       >
//         <CardMedia
//           component="img"
//           height="220"
//           image={props.image}
//           alt={props.name}
//           style={{ objectFit: "cover" }}
//         />
//         <CardContent>
//           <Typography
//             gutterBottom
//             variant="h6"
//             component="div"
//             noWrap
//             style={{ fontWeight: 600 }}
//           >
//             {props.name}
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               mt: 1,
//             }}
//           >
//             <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
//             <Box>
//               <Typography
//                 variant="body1"
//                 component="span"
//                 sx={{ fontWeight: "bold", color: "#2e7d32" }}
//               >
//                 ₹{props.new_price}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 component="span"
//                 sx={{
//                   textDecoration: "line-through",
//                   marginLeft: 1,
//                   color: "#888",
//                 }}
//               >
//                 ₹{props.old_price}
//               </Typography>
//             </Box>
//           </Box>
//         </CardContent>
//       </Link>

//       <CardActions style={{ px: 2, pb: 2 }}>
//         {/* <Button
//           fullWidth
//           variant="contained"
//           size="small"
//           color="success"
//         >
//           Add to Cart
//         </Button> */}
//       </CardActions>
//     </Card>
//   );
// };

// export default Item;


