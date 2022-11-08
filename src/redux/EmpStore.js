import {createStore,applyMiddleware,} from 'redux'
import thunk from 'redux-thunk'
import {empReducer} from '../redux/Empreducer'

const middleware = [thunk]
const store = createStore(empReducer,applyMiddleware(...middleware))
export default store