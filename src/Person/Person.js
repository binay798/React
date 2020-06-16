import React from 'react';

import './Person.css';
export const Person = (props) => {
	
	return (
		<div>
			<div >
				<p>Hello! My name is {props.name} and i am {props.age} years old. </p>
				<h1  onClick={props.del}>X</h1>
			</div>
			<input type="text" onChange={props.changed}  />
		</div>
		)
}

