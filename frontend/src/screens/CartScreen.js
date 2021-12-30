import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Cart } from 'react-bootstrap'
import  Message  from '../components/Message'
import { addToCart } from '../actions/cartActions'


function CartScreen() {
    const navigate = useNavigate()
    let params = useParams()
    let location = useLocation();
    const productId = params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    // console.log('cartItems',cartItems)
    
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    }, [dispatch, productId, qty])
    // console.log(`qty:${qty}`)
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ):(
                    <ListGroup variant='flush'>

                    </ListGroup>
                )
                }
            </Col>
            <Col md={4}>

            </Col>
            
        </Row>
    )
}

export default CartScreen
