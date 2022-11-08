import { FETCH_SUCCESS, FETCH_FAIL } from './EmpConstants'
import axios from 'axios'
export  const  employeeAction = (id) => async (dispatch) => {
 
 try{
    const {employeeData} = await axios.get('http://localhost:3010/empdata/'+id)
    dispatch(
    {
        type:FETCH_SUCCESS,
        payload: employeeData.data
    }
)

 }  catch(error){
    dispatch({
        typepe:FETCH_FAIL,
        error:error
    })
 } 

}