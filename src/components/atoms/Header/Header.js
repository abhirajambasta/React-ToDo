import React from 'react';

const Header = props => {
	const {children, ...others} = this.props;
	return (
		 <h1
		    {...others}
		  >
		    {children}
		  </h1>
	);
}

export default Header;