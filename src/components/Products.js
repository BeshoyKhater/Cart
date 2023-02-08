import React  from 'react'
import {useEffect}  from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch,useSelector } from "react-redux"
import { addToCart } from '../rtk/slices/cart-slice';
import { fetchProducts } from '../rtk/slices/product-slice';


export const Products = () => {
    const products=useSelector((state)=>state.products);
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch]);
  return (
    <Container className='kk'>
        <Row>
            {products.map((product)=>(
            <Col className='mt-4'key={product.id}>
                <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" style={{ height: '12rem' }} src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text style={{ height: '10rem' ,overflow:"hidden" }}>{product.description}</Card.Text>
                    <Card.Text >${product.price}</Card.Text>
                    <Button onClick={()=>dispatch(addToCart(product))} variant="primary">Add To Cart</Button>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>    
    </Container>
  )
}
