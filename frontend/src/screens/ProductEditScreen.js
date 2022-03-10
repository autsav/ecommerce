import React, { useState, useEffect } from "react"
import { Link,  useNavigate, useParams } from 'react-router-dom'


import {  Button, Row ,Col, Form, ListGroup, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'

import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'

import { listProductDetails } from '../actions/productActions'

function ProductEditScreen() {
    const params = useParams()

    const productId = params.id

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [countInStock, setCountInStock] = useState(0)
    // const [rating, setRating] = useState('')
    // const [numReviews, setName] = useState('')
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails
   
    useEffect(() => {
        if(!product.name || product._id !== Number(productId)){
            dispatch(listProductDetails(productId))
        }else{
            setName(product.name)
            setImage(product.image)
            setBrand(product.brand)
            setCategory(product.category)
            setDescription(product.description)
            setPrice(product.price)
            setCountInStock(product.countInStock)
        }

    }, [dispatch, product, productId])

    const submitHandler = (e) =>{
        console.log('Update product')
    }

  return (
        <div>
            <Link to='/admin/productlist'>
                Go Back
            </Link>

                <FormContainer>
                            <h1>Edit product</h1>
                            {/* {message && <Message variant={'danger'} >{message}</Message>}

                            {error && <Message variant={'danger'} >{error}</Message>}
                            {loading && <Loader />} */}
                            <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name' >
                                <Form.Label>Name</Form.Label>
                                    <Form.Control
                                    required
                                    type="name"
                                    placeholder ='Enter Name'
                                    value={name}
                                    onChange={(e) =>setName(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId='image' >
                                <Form.Label>Image</Form.Label>
                                    <Form.Control
                                    required
                                    type="image"
                                    placeholder ='Enter image'
                                    value={image}
                                    onChange={(e) =>setImage(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId='brand' >
                                <Form.Label>Brand</Form.Label>
                                    <Form.Control
                                    required
                                    type="text"
                                    placeholder ='Enter Brand'
                                    value={brand}
                                    onChange={(e) =>setBrand(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId='category' >
                                <Form.Label>Category</Form.Label>
                                    <Form.Control
                                    required
                                    type="text"
                                    placeholder ='Select Category'
                                    value={category}
                                    onChange={(e) =>setCategory(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId='description' >
                                <Form.Label>Description</Form.Label>
                                    <Form.Control
                                    required
                                    type="text"
                                    placeholder ='Enter description'
                                    value={description}
                                    onChange={(e) =>setDescription(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                {/* <Form.Group controlId='name' >
                                <Form.Label>Rating</Form.Label>
                                    <Form.Control
                                    required
                                    type="text"
                                    placeholder ='Enter Name'
                                    value={rating}
                                    onChange={(e) =>setRating(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group> */}
                                <Form.Group controlId='price' >
                                <Form.Label>Price</Form.Label>
                                    <Form.Control
                                    required
                                    type="number"
                                    placeholder ='Enter price'
                                    value={price}
                                    onChange={(e) =>setPrice(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId='countinstock' >
                                <Form.Label>CountInStock</Form.Label>
                                    <Form.Control
                                    required
                                    type="number"
                                    placeholder ='Enter countInStock'
                                    value={countInStock}
                                    onChange={(e) =>setCountInStock(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>

                                

                            

                                <Button  type='submit' variant="primary">
                                Update
                                </Button>

                            </Form>
                        

                        </FormContainer>

        </div>
            
  )
}

export default ProductEditScreen