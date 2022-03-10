import React, { useState, useEffect } from "react"
import { Link,  useNavigate } from 'react-router-dom'


import {  Button, Row ,Col, Form, ListGroup, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'

import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'

import { createProduct } from '../actions/productActions'

function CreateProductScreen() {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    // const [numReviews, setName] = useState('')
    const [price, setPrice] = useState('')
    const [countInStock, setCountInStock] = useState('')

    const submitHandler = () =>{
        console.log('created')
    }

  return (
            <FormContainer>
            <h1>Create product</h1>
            {/* {message && <Message variant={'danger'} >{message}</Message>}

            {error && <Message variant={'danger'} >{error}</Message>}
            {loading && <Loader />} */}
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='name' >
                <Form.Label>Name</Form.Label>
                    <Form.Control
                    required
                    type="text"
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
                    placeholder ='Enter Name'
                    value={image}
                    onChange={(e) =>setImage(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='name' >
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
                <Form.Group controlId='name' >
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
                <Form.Group controlId='name' >
                <Form.Label>Description</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder ='Enter Name'
                    value={description}
                    onChange={(e) =>setDescription(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='name' >
                <Form.Label>Rating</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder ='Enter Name'
                    value={rating}
                    onChange={(e) =>setRating(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='name' >
                <Form.Label>Price</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder ='Enter Name'
                    value={price}
                    onChange={(e) =>setPrice(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='name' >
                <Form.Label>CountInStock</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder ='Enter countInStock'
                    value={countInStock}
                    onChange={(e) =>setCountInStock(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                

               

                <Button  type='submit' variant="primary">
                Create
                </Button>

            </Form>
           

        </FormContainer>
  )
}

export default CreateProductScreen