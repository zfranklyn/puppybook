import {connect} from 'react-redux';
import {retrievePuppies} from './actions';
import AllPuppies from './AllPuppies'

const mapStateToProps = function(state, ownProps){
	return {
		allPuppies: state.allPuppies
	}
}

export default connect(mapStateToProps, null)(AllPuppies);