import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let navigate = useNavigate()
    const location = useLocation();
    
    const submitHandler = (e) =>{
        e.preventDefault()
        if(keyword){
            navigate(`/?keyword=${keyword}&page=1`)
            // window.location.reload(true);
        }else{
            navigate(`${location.pathname}`)
        }
    }
  return (
    <div>
        <Form className="d-flex" onSubmit={submitHandler} inline  >
            <Form.Control
                type='search'
                name='q'
                onChange={ (e) => setKeyword(e.target.value)}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                // className = 'd-flex '
            >
            </Form.Control>
            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
            >Search</Button>
        </Form>

    </div>
  )
}

export default SearchBox