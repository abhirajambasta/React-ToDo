import React from 'react';

const Input = ({id, className, onChange, type, labelText, ...others }) => {
	return (
		<label
		  htmlFor={id}
		  className={className}
		>
		<input
		  id={id}
		  type={type}
		  onChange={event => onChange(event)}
		  {...others}
		/>
		  {labelText}
		</label>
	);
}

Input.displayName = 'Input';

export default Input;