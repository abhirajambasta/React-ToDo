import React from 'react';

const Button = props => {
	const {children, ...others} = props;
	return (
		 <button
		    {...others}
		  >
		    {children}
		  </button>
	);
}

export default Button;