
export const GET_PUPPIES = "GET_PUPPIES";

const getPuppies = function(puppiesArray){
	return {
		type: GET_PUPPIES,
		allPuppies: puppiesArray
	}
}

export const retrievePuppies = function(){
	return (dispatch, getState)=>{
		fetch('/api/puppies')
		.then(result=>result.json())
		.then(allPuppies=>{
			dispatch(getPuppies(allPuppies));
		})
	}
}