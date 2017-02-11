// This is our master reducers file. It doesn't manage any particular piece of state
// It manages/contains all the other reducers (which contain a piece of state)

// get the combineReducers method from redux
import { combineReducers } from 'redux';

// import each reducer here
// first: StudentReducer
import StudentReducer from './StudentReducer.js';
import StudentReducer2 from './StudentReducer2.js';

const rootReducer = combineReducers({
	// Inside here we pass each reducer as a key/property
	// Each property/key will be available as state.key
	students: StudentReducer,
	students2: StudentReducer2
});

export default rootReducer;
