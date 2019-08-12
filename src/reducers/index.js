import { combineReducers } from "redux";
import { reducer as formReducers } from "redux-form";

const rootReducer = combineReducers({   
   form : formReducers
})

export default rootReducer