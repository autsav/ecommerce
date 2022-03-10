import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Card, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import  Loader from '../components/Loader'
import  Message  from '../components/Message'
import { listProducts, deleteProduct } from '../actions/productActions'

function ProductListScreen() {
      const dispatch = useDispatch()
      const navigate = useNavigate()

      const productList = useSelector(state => state.productList)
      const { loading ,error, products } = productList 

      const productDelete = useSelector(state => state.productDelete)
      const { loading:loadingDelete ,error:errorDelete, success:successDelete } = productDelete 

      const userLogin = useSelector(state => state.userLogin)
      const { userInfo } = userLogin

      useEffect(()=>{
        dispatch(listProducts())
      },[dispatch, userInfo,successDelete])

      const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to delete this product?')){
          dispatch(deleteProduct(id))
      }
        
      }
      const createProductHandler = ()=>{
        navigate(`/admin/createproduct`)
      }
  
  return (
    <div>
    <Row className='align-items-center'>
      <Col>
        <h1>Products</h1>
      </Col>
      <Col className='text-right'>
        <Button className='my-3' onClick={createProductHandler} >
          <i className='fas fa-plus'></i> Create Product
        </Button>
      </Col>
    </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

         {loading 
            ?(<Loader/>)
            :error
                ? (<Message varian='danger'>{error}</Message>)
                : (
            <Table striped bordered hover responsive className='table-sm' >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>IMAGE</th>
                  <th>BRAND</th>
                  <th>CATEGORY</th>
                  <th>DESCRIPTION</th>
                  <th>RATING</th>
                  <th>NUM OF REVIEWS</th>
                  <th>PRICE</th>
                  <th>COUNT IN STOCK</th>
                  {/* <th>CREATED AT</th> */}
                  {/* <th>CREATED BY</th> */}
                  <th>Action</th>
                </tr>

              </thead>
              <tbody>
                {products.map(product => (
                      <tr key={product._id} >
                        <td>{product._id} </td>
                        <td>{product.name} </td>
                        <td> <Link to={`/product/${product._id}`}>
                                <Card.Img src={product.image} />
                            </Link>
                      </td>
                        <td>{product.brand} </td>
                        <td>{product.category} </td>
                        <td>{(product.description).length > 10 ?
                              (product.description).substring(0,30) + '...' :
                              product.description
                        } </td>
                        <td>{product.rating} </td>
                        <td>{product.numReviews} </td>
                        <td>${product.price} </td>
                        <td>{product.countInStock} </td>
                        {/* <td>{product.createdAt} </td> */}
                        {/* <td>{product.user} </td> */}
                        <td>
                          <LinkContainer to={`/admin/product/${product._id}/edit`}>
                              <Button variant='light' className='btn-sm'>
                                  <i className="fas fa-edit" ></i>
                              </Button>
                          </LinkContainer>

                          <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(product._id)} >
                              <i className="fas fa-trash" ></i>
                          </Button>

                          </td>
                      

                      </tr>
                  
                ))}
                
              </tbody>

            </Table>
            )
         }
    </div>
  )
}

export default ProductListScreen