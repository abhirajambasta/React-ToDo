import React from 'react';
import Item from './../../atoms/Item';
import Button from './../../atoms/Button';

const ListItem = ({ removeElement, textValue, id, completed }) => (
		<div>
			<Item itemText={textValue} className='' />
			{
				!completed 
				?
					<Button type='button' onClick={() => removeElement(id)}>
						<span>
							Remove Task
						</span>
					</Button>
				:
				<strong>Complete</strong>
			}
		</div>
	);

export default ListItem;