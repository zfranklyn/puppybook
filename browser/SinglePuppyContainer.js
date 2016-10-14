import {connect} from 'react-redux';
import {retrievePuppies} from './actions';
import SinglePuppy from './SinglePuppy'

const mapStateToProps = function({ currentPuppy }, ownProps) {
	return { puppy: currentPuppy }
}

export default connect(mapStateToProps, null)(SinglePuppy);