import { FETCH_SUCCESS, FETCH_FAIL } from './EmpConstants'

const initialState ={
    employees:[]
}
export const empReducer = (state = initialState, action) => {
    console.log("payload",action.payload);
    switch (action.type) 
    {
        case FETCH_SUCCESS:
            return {
                employees: action
                
            }
        case FETCH_FAIL:
            return {
                employees: action.error
            }
        default:
            return state
    }
console.log("states");
}