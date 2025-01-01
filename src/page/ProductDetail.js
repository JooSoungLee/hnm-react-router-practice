import React, {useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  let {id} = useParams();

  
  const[product, setProduct] = useState(null);
  
  const getProductDetail = async() => {
    let url = `http://localhost:5000/products/${id}`;
    console.log(url);
    let response = await fetch(url)
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  
  useEffect(()=>{
    getProductDetail();
  }, []);
  
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img}></img>
        </Col>
        <Col>
          <div>
            {product?.title}
          </div>
          <div>
            {product?.price}
          </div>
          <div>
            {product?.choice===true?"Conscious choice":"Unconscious Choice"}
          </div>
          <div>
            <Form.Select aria-label="Default select example">
              <option>사이즈 선택</option>
              {product?.size.map((obj)=>(
                <option>{obj}</option>
              ))}
            </Form.Select>
          </div>
          <div>
            <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail