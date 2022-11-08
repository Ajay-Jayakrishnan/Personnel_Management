import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useFormik } from 'formik'
import './Auth.css'
import axios from 'axios'
function RegisterForm() {
  //function call for registering new user
  function register(values) {
    axios.post('http://localhost:3010/register', values).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    })
  }


  const formik = useFormik({
    initialValues: {
      name: '',
      password: ''
    },
    onSubmit: values => {
      register(values)
    },
    validate: values => {
      let errors = {}
      if (!values.name) {

        errors.name = "Required"
      }
      if (!values.password) {
        errors.password = "Required"
      }

      return errors

    }

  })


  return (
    <div className='bod' >
      <Row className='p-2 ' >
        <div><h2 className='text-white'>MaPe</h2></div>
        <Col sm={6} md={4} className="mx-auto" >
          <form className='border rounded bg-light p-2 lform shadow' onSubmit={formik.handleSubmit}>
            <div className='text-center'><h3 className='fw-bold'>Register</h3></div>
            <div >
              <label htmlFor='uname'> Username </label>
              <input className='form-control ' type="text" id='uname' name='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}></input>
              {formik.touched.name && formik.errors.name ? (<div style={{ color: "red", textAlign: "center" }}>{formik.errors.name}</div>) : null}
            </div>
            <div >
              <label htmlFor='pass'> Password </label>
              <input className='form-control' type="password" id='pass' name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}></input>
              {formik.touched.password && formik.errors.name ? (<div style={{ color: "red", textAlign: "center" }}>{formik.errors.name}</div>) : null}
            </div>
            <div className='d-flex'>
              <button type='submit' className='btn btn-success mt-2 bt'>Register</button>
            </div>
            <div className='d-flex mt-2'>
              <p>Already a member?</p>  <Link style={{ textDecoration: "none" }} to={'/'}>Login</Link>
            </div>
          </form>

        </Col>
      </Row>
    </div>
  )
}

export default RegisterForm