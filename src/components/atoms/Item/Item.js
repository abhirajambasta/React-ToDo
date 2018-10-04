import React from 'react';

const Item = ({itemText, ...others}) => (
		 <span
		    {...others}
		  >
		    {itemText}
		  </span>
	);

export default Item;