import { GET_PUPPIES, GET_PUPPY} from './actions';

const initialState = { allPuppies: [], currentPuppy: {} }

// REDUCERS
export default function reducer(state = initialState, action){
	switch(action.type){
		case GET_PUPPIES:
			return Object.assign({}, state, {allPuppies: action.allPuppies});
		case GET_PUPPY:
			return Object.assign({}, state, {currentPuppy: action.currentPuppy});
		default: return state;
	}
}