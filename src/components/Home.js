import React, { useEffect, useState } from 'react'
import DataTable from './DataTable'
import Header from './Header'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import HomeHeader from './HomeHeader'


function Home() {

  const [empData, setData] = useState()

  const navigate = useNavigate()
  const params = useParams()

  function call() {

    axios.get('http://localhost:3010/empdata/' + params.id).then(result => {
      setData(result.data.employees)
    })
  }

  useEffect(() => {

    if (localStorage.getItem('token')) {
      axios.get('http://localhost:3010/empdata/' + params.id).then(result => {
        setData(result.data.employees);
      })

    } else {
      alert("please Login")
      navigate('/')
    }




  }, [])



  return (
    <div>
      <HomeHeader User={params.id}></HomeHeader>
      <div className='d-flex'>
        <button onClick={() => navigate(`/home/addnew/${params.id}`)} className='btn mt-2 btn-success ms-auto me-2'>+Add</button>
      </div>
      <div className='mt-3 container-fluid'>
        <DataTable data={empData} callhandler={call}></DataTable>
      </div>
      <Link to={'/home/update'} >update</Link>
    </div>
  )
}

export default Home