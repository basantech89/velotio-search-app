import React, { useRef, useState } from 'react';
import {
	Row,
	Col,
	Table,
	Button,
	Alert,
	InputGroup,
	InputGroupAddon,
	Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { usePageContext } from "../../components/generic/Pagination/PageProvider";
import Pagination from "../../components/generic/Pagination/Pagination";
import Filter from "../../components/generic/Filter/Filter";

const mapStateToProps = state => ({ companies: state.companies });

const Companies = ({ companies }) => {
	let theme = window.localStorage.getItem('theme');
	const [itemsPerPage, setItemsPerPage] = useState(5);
	const { currentPage } = usePageContext();
	const lastItem = currentPage * itemsPerPage;
	const firstItem = lastItem - itemsPerPage;
	const filter = useRef('id');
	const [localCompanies, setCompanies] = useState(companies);
	const changeItemsPerPage = event => setItemsPerPage(event.target.value);

	const setFilter = () => setCompanies([...localCompanies.sort(sortCompanies)]);

	const sortCompanies = (company1, company2) => {
		const sortBy = filter.current.value;
		if (company1[sortBy] > company2[sortBy]) {
			return 1;
		} else if (company1[sortBy] < company2[sortBy]) {
			return -1;
		}
		return 0;
	};

	const formattedCompanies = localCompanies
		.slice(firstItem, lastItem)
		.map(company => (
			<tr key={company.id}>
				<td> {company.title} </td>
				<td> {company.description} </td>
				<td> {new Date(company.timestamp).toLocaleString()} </td>
			</tr>
		));

	return (
		<>
			<div className="d-grid">
				<Row>
					<Col sm={5} lg={4}>
						<NavLink to="/">
							<Button color="success" style={{marginBottom: 30}}> Add a Company </Button>
						</NavLink>
					</Col>
					<Col sm={7} lg={4}>
						<Filter ref={filter} setFilter={setFilter} />
					</Col>
					<Col sm={10} md={6} lg={4}>
						<Alert className="col-8 col-md-12" color="info">
							Showing {companies.length ? firstItem + 1 : 0} -
							{companies.length ? companies.length < lastItem ? companies.length : lastItem : 0} of {companies.length} entries
						</Alert>
					</Col>
				</Row>
			</div>
			<Table striped responsive style={{color: theme === "light" ? 'black' : 'white'}}>
				<thead>
				<tr>
					<th> TITLE</th>
					<th> DESCRIPTION</th>
					<th> REGISTERED AT</th>
				</tr>
				</thead>
				<tbody>
					{formattedCompanies}
				</tbody>
			</Table>
			<Row className="d-grid justify-content-center">
				<Col xs={7} md={6} lg={{ size: 5, offset: 4 }}>
					<Pagination totalItems={companies.length} itemsPerPage={itemsPerPage}/>
				</Col>
				<Col xs={6} lg={3}>
					<InputGroup>
						<InputGroupAddon addonType="prepend">
							<Button color="primary" outline> Items Per Page </Button>
						</InputGroupAddon>
						<Input
							value={itemsPerPage}
							onChange={changeItemsPerPage}
							type="number"
							step="1"
							min="1"
						/>
					</InputGroup>
				</Col>
			</Row>
		</>
	);
};

export default connect(mapStateToProps)(Companies);
