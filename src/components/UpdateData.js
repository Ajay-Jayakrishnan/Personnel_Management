import React from 'react'
import Header from './Header'
import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useFormik } from 'formik'

function UpdateData() {

    const location = useLocation()
    const body = location.state
   


    useEffect(() => {
        console.log(body);
        axios.post('http://localhost:3010/updateData', body).then((result) => {
            if (result) {
                console.log(result.data.x.empName);
                  
            }
        })
    }, [])

    // const updateemployee = (values) => {
    //     axios.put(`http://localhost:3010/updateEmployee/employer/${body.employer}/employee/${body.employee}`, values)
    // }

    const formik = useFormik({
        initialValues:{
            empName: '',
            empMail: '',
            empPhone: '',
            department: 'a',
            designation: 'a'
        },
        onSubmit: values=>{
            //updateemployee(values)
        }
       
    })




    return (
        <>
            <div>
                <Header User={body.employer}></Header>
                <Row className='p-2'>
                    <Col sm={5} className='mx-auto'>
                        <form className='bg-light mt-3' onSubmit={formik.handleSubmit}>
                            <div className='text-center mb-3'>
                                <h4 className='fw-bold'>Employee Details</h4>
                            </div>
                            <div className='p-2'>
                                <label htmlFor='empName'>Name</label>
                                <input id='empName' type='text' name='empName' className='form-control' onChange={formik.handleChange} value={formik.values.empName} ></input>
                            </div>
                            <div className='p-2'>
                                <label htmlFor='empmail'>Email</label>
                                <input id='empmail' type='email' name='empMail' className='form-control' onChange={formik.handleChange} value={formik.values.empMail}></input>
                            </div>
                            <div className='p-2'>
                                <label htmlFor='empphone'>Phone</label>
                                <input id='empphone' type='text' name='empPhone' className='form-control' onChange={formik.handleChange} value={formik.values.empPhone}></input>
                            </div>
                            <Row className='g-1'>
                                <Col sm={6}>
                                    <div className='p-2'>
                                        <label htmlFor='dept'>Department</label>
                                        <select id='dept' className='form-select' name='department' onChange={formik.handleChange} value={formik.values.department}>
                                            <option>a</option>
                                            <option>b</option>
                                        </select>
                                    </div></Col>
                                <Col sm={6}>
                                    <div className='p-2'>
                                        <label htmlFor='desig'>Designation</label>
                                        <select id='desig' className='form-select' name='designation' nChange={formik.handleChange} value={formik.values.designation}>
                                            <option>a</option>
                                            <option>b</option>
                                            <option>a</option>

                                        </select>
                                    </div></Col>
                            </Row>
                            <div className='d-flex p-2'><button type='submit' className='btn btn-success ms-auto'>Update</button></div>
                        </form>
                    </Col>
                </Row>
            </div>


        </>
    )
}

export default UpdateData