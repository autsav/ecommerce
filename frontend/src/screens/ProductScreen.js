import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useNavigate   } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetails } from '../actions/productActions'; 

function ProductScreen() {
    const navigate  = useNavigate();
    const [qty, setQty] = useState(1)
    let params = useParams()
    // const [product, setProduct] = useState([])
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {error, loading, product} = productDetails
    useEffect(() =>{
        dispatch(listProductDetails(params.id))

        // async function fetchProduct(){
        //     const { data } = await axios.get(`/api/products/${params.id}`)
        //     setProduct(data)
        // }
        // fetchProduct()
    }, [dispatch, params])
    const addToCartHandler = () =>{
        navigate(`/cart/${params.id}?qty=${qty}`)
    }
    // let  product = {}
    
    // const product = products.find((p) => p._id == params.id)
    // console.log(product.name)
    return (
        <div>
           
            <Link to='/' className='btn btn-dark'>Go Back</Link>
            {
                loading ? <Loader />
                    :error ? <Message variant='danger'>{error}</Message>
                    :
                    (<Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: ${product.price}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: ${product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col>
                                                <strong>${product.price}</strong>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>
                                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    {
                                        product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Qty</Col>
                                                    <Col xs='auto' className='my-1'>
                                                        <Form.Select
                                                        
                                                            className='dropdown-toggle'
                                                            as="select"
                                                            value={qty}
                                                            onChange={(e) => setQty(e.target.value)}
                                                        >
                                                        {
                                                            [...Array(product.countInStock).keys()].map((x) =>(
                                                                <option value = { x + 1 } key={ x + 1 }  >
                                                                    { x + 1 }
                                                                </option>
                                                            ))
                                                        }

                                                        </Form.Select>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )
                                    }
                                    <ListGroup.Item>
                                    <Row>
                                    
                                        <Button 
                                                onClick={addToCartHandler}
                                                className='btn-block' 
                                                disabled={product.countInStock == 0} 
                                                type='button'>
                                                Add to Cart
                                        </Button>
                                    
                                    </Row>
                                        
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>)
            }
            
        </div>
    )
}

export default ProductScreen
