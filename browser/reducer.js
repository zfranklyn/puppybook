import { GET_PUPPIES, } from './actions';


// 
const initialState = { allPuppies: [] }

// REDUCERS
export default function reducer(state = initialState, action){
	switch(action.type){
		case GET_PUPPIES:
			return Object.assign({}, state, {allPuppies: action.allPuppies});
		default: return state;
	}
}