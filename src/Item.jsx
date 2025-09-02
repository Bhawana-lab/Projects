

import React from "react";
import './Item.css';
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
          marhin-left="20px"
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



