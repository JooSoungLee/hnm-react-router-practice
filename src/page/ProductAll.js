import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// API 호출은 useEffect를 이용해서 한다.
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts=async()=>{
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("data",data);
    console.log("productList",productList);
  }

  useEffect(()=>{
    getProducts();
  }, [])

  return (
    <div>
      <Container>
      
      <Row>
        {productList.map((menu)=>(
              <Col lg={3}>
                <ProductCard item={menu}/>
              </Col>
          ))}
          </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll