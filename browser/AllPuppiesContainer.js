import {connect} from 'react-redux';
import {retrievePuppies} from './actions';
import AllPuppies from './AllPuppies'

const mapStateToProps = function(state, ownProps){
	return {
		allPuppies: state.allPuppies
	}
}

const mapDispatchToProps = function(dispatch, ownProps){
	return {
		getPuppies: function(){
			dispatch(retrievePuppies());
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AllPuppies);