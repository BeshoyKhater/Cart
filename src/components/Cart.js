import React from 'react'
import Table from 'react-bootstrap/Table';
import {useSelector,useDispatch} from "react-redux"
import Button from 'react-bootstrap/Button';
import { clear, deleteFromCart } from '../rtk/slices/cart-slice';

export const Cart = () => {
    const products=useSelector((state)=>state.cart)
    const dispatch=useDispatch();
    const totalPrice=products.reduce((acc,product)=>{
        acc +=product.price * product.quantity;
        return acc
    },0)
  return (
    <>
    
    <Table striped bordered hover variant="dark" className='kk'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product)=>(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td ><img  src={product.image} alt="img" style={{height:"4rem",width:"5rem"}}/></td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><Button onClick={()=>dispatch(deleteFromCart(product))} variant='danger' >Delete</Button></td>
            </tr>
        ))}
      </tbody>
    </Table>
<Button onClick={()=>dispatch(clear())} variant="primary" >Clear</Button>
<h2>Total : {totalPrice.toFixed(2)} </h2>
    </>
  )
}
