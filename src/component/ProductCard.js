import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail=()=>{
    navigate(`/product/${item.id}`);
  }
  return (
    <div style={{ width: '100%', margin: '10px', textAlign: 'center' }} onClick={showDetail}>
      <img
        src={item?.img}
        alt={item?.title}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <div>{item?.choice === true ? "Conscious choice" : "Unconscious Choices"}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;