import React from 'react';
import Anchor from './../../atoms/Anchor';

const NavLinks = () => (
			<div>
				<Anchor to='/'>
					Home
				</Anchor>
				<Anchor to='/addNew'>
					Add New
				</Anchor>
				<Anchor to='/completed'>
					Completed
				</Anchor>
				<Anchor to='/pending'>
					Pending
				</Anchor>
			</div>
		);

export default NavLinks;