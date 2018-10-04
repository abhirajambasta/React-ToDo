import React from 'react';
import { Link } from 'react-router-dom';

const Anchor = ({to, as, children, ...others}) => {

	return	(
			 <Link to={to} as={as} {...others}>
			 	{children}
			 </Link> 
		);
}

export default Anchor;