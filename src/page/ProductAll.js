import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';

// API 호출은 useEffect를 이용해서 한다.
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts=async()=>{
    let searchQuery = query.get('q') || "";
    console.log("searchQuery",searchQuery);

    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log("data",data);
    console.log("productList",productList);
  }

  useEffect(()=>{
    getProducts();
  }, [query])

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