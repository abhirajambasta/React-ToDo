import React from 'react';
import ListItem from './../../molecules/ListItem';

const List = ({tasks, removeElement}) => (
	<div>
		{
			tasks && tasks.map((item, index) => <ListItem key={item.id} id={item.id} removeElement={removeElement} textValue={item.text} index={index} completed={item.done} />)
		}
	</div>
);

export default List;