import React from 'react'
import { Table, Modal, } from 'react-bootstrap'
import { Pencil, Trash } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DataTable(props) {
  const params = useParams()
  const navigate = useNavigate()

  var x = params.id
  const { data, callhandler } = props

  function deleteemp(emp) {
    const body = {
      employer: x,
      employee: emp

    }
    axios.post('http://localhost:3010/deleteemp', body).then((result) => {
      if (result) {
        callhandler()
      }
    })

  }

  function updateemp(empid, empname) {

    navigate(`/home/update/${empname}`, { state: { employee: empid, employer: x } })
  }


  return (
    <div>
      <Table striped responsive>
        <thead>
          <tr>
            <th>SlNo</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.empID}>
              <td>{index + 1}</td>
              <td>{item.empName}</td>
              <td>{item.department}</td>
              <td>{item.designation}</td>
              <td>{item.empMail}</td>
              <td>{item.empPhone}</td>
              <td >
                <button onClick={() => { updateemp(item.empID, item.empName) }} style={{ border: "none", background: "none", color: "green" }}><Pencil></Pencil>
                </button>
              </td>
              <td className='dropdown-center'>

                <button onClick={() => deleteemp(item.empID)} style={{ border: "none", background: "none", color: "red" }}><Trash></Trash></button>


              </td>
            </tr>
          ))}




        </tbody>
      </Table>
    </div>
  )
}

export default DataTable