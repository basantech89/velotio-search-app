import React, { useRef } from 'react';
import {
	Button,
	InputGroup,
	InputGroupAddon,
	Input
} from 'reactstrap';

const Filter = React.forwardRef(({ setFilter }, ref) => {
	return (
		<InputGroup className="mb-4">
			<InputGroupAddon addonType="prepend">
				<Button color="primary" outline> Sort By </Button>
			</InputGroupAddon>
			<Input
				innerRef={ref}
				onChange={setFilter}
				type="select"
				name="sort-filter"
				className="col-4"
			>
				<option value="id"> Time </option>
				<option value="timestamp"> Registration </option>
				<option value="title"> Title </option>
				<option value="description"> Description </option>
			</Input>
		</InputGroup>
	);
});

export default Filter;
