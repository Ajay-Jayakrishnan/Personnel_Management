import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from './Header'
import { useFormik } from 'formik'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Footer.css'
function AddNew() {
    const params = useParams()
    const id = params.id
    function addemployee(values) {
        axios.post('http://localhost:3010/addemployee/' + id, values).then(result => {
            console.log(result);
            alert(result.data.message)
        }).catch(err => {
            console.log(err);
        })

    }
    const formik = useFormik({
        initialValues: {
            empName: '',
            empMail: '',
            empPhone: '',
            department: 'a',
            designation: 'a'
        },
        onSubmit: values => {
            addemployee(values)
        }

    })

    return (
        <>
            <div >
                <Header></Header>
                <Row className='p-2 body' >
                    <Col sm={5} className='mx-auto'>
                        <form className='bg-light mt-3' onSubmit={formik.handleSubmit}>
                            <div className='text-center mb-3'>
                                <h4 className='fw-bold'>New Employee Details</h4>
                            </div>
                            <div className='p-2'>
                                <label htmlFor='empName'>Name</label>
                                <input id='empName' type='text' name='empName' className='form-control' onChange={formik.handleChange} value={formik.values.empName}></input>
                            </div>
                            <div className='p-2'>
                                <label htmlFor='empmail'>Email</label>
                                <input id='empmail' type='email' name='empMail' className='form-control' onChange={formik.handleChange} value={formik.values.empMail} ></input>
                            </div>
                            <div className='p-2'>
                                <label htmlFor='empphone'>Phone</label>
                                <input id='empphone' type='text' name='empPhone' className='form-control' onChange={formik.handleChange} value={formik.values.empPhone}></input>
                            </div>
                            <Row className='g-1'>
                                <Col sm={6}>
                                    <div className='p-2'>
                                        <label htmlFor='dept'>Department</label>
                                        <select id='dept' className='form-select' name='department' onChange={formik.handleChange} value={formik.values.department} >
                                            <option >a</option>
                                            <option >b</option>
                                        </select>
                                    </div>


                                </Col>
                                <Col sm={6}>
                                    <div className='p-2'>
                                        <label htmlFor='desig'>Designation</label>
                                        <select id='desig' className='form-select' name='designation' onChange={formik.handleChange} value={formik.values.designation}>
                                            <option>a</option>
                                            <option>b</option>
                                            <option>a</option>

                                        </select>
                                    </div></Col>
                            </Row>
                            <div className='d-flex p-2'><button className='btn btn-success ms-auto' type='submit'>Add</button></div>
                        </form>
                    </Col>
                </Row>


            </div>

        </>
    )
}

export default AddNew