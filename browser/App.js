import React from 'react';

export default (props)=>(
	<div className="container flexbox-container">
		<div className="jumbotron">
		{props.children}
		</div>
	</div>
)