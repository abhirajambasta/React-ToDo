import React from 'react';
import Input from './../../atoms/Input';
import Button from './../../atoms/Button';

class InputGroup extends React.Component {
	static Input = Input;
	static Button = Button;

	render = ()  => (
			<div>
				{this.props.children({id:'taskName', type:'text', className:'', onChange: this.props.onChange, value: this.props.inputValue, labelText:'Enter task Name'})}
			</div>
		)
}

export default InputGroup;