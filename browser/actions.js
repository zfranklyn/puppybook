// ACTIONS
export const GET_PUPPIES = "GET_PUPPIES";// ACTIONS
export const GET_PUPPY = "GET_PUPPY";


// ACTION CREATORS
const getPuppies = function(puppiesArray){
	return {
		type: GET_PUPPIES,
		allPuppies: puppiesArray
	}
}

const getPuppy = (puppy) => ({
	type: GET_PUPPY,
	currentPuppy: puppy
});


// THUNKS
export const retrievePuppies = function(){
	return (dispatch, getState) => {
		fetch('/api/puppies')
		.then(result=>result.json())
		.then(allPuppies => {
			dispatch(getPuppies(allPuppies));
		})
	}
}

export const retrievePuppy = function(puppyId){
	return (dispatch, getState) => {
		fetch(`/api/puppies/${puppyId}`)
		.then(result=>result.json())
		.then(puppy => {
			dispatch(getPuppy(puppy));
		})
	}
}