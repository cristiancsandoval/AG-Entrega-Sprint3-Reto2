import { createStore} from "redux";
import reducer from '../reducers/indexReducers'

const store = createStore(reducer);

export default store;