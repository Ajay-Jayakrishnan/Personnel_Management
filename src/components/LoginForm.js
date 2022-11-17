import React from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, } from 'react-router-dom'
import './Auth.css'
import { useFormik } from 'formik'
import axios from 'axios'
function LoginForm() {

  const navigate = useNavigate()

  function login(values) {
    axios.post('http://localhost:3010/login', values).then(result => {
   
      localStorage.setItem('token', result.data.token)
      localStorage.setItem('User', result.data.name1)
      alert(result.data.message)
      navigate(`/home/${result.data.name1}`)

    }).catch((err) => {

      alert(err.response.data.message);
    })
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    onSubmit: values => {
      login(values)
    }

  })
  return (
    <div className='bod' >
      <Row className='p-2 ' >
        <div><h2 className='text-white'>MaPe</h2></div>
        <Col sm={6} md={4} className="mx-auto" >

          <form className='border rounded bg-light p-2 lform shadow' onSubmit={formik.handleSubmit}>
            <div className='text-center'><h3 className='fw-bold'>Login</h3></div>
            <div >
              <label htmlFor='uname'> Username </label>
              <input className='form-control ' type="text" id='uname' name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
            </div>
            <div >
              <label htmlFor='pass'> Password </label>
              <input className='form-control' type="password" id='pass' name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}></input>
            </div>
            <div className='d-flex'>
              <button type='submit' className='btn btn-primary mt-2 bt'>Login</button>
            </div>
            <div className='d-flex mt-2'>
              <p>New to MaPe? </p>  <Link style={{ textDecoration: "none" }} to={'/register'}>Register</Link>
            </div>
          </form>

        </Col>
      </Row>
     
    </div>
  )


}

export default LoginForm