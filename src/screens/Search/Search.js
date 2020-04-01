import React, { useRef, useState } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { fetchCompanies } from '../../utils/apiCaller';
import styles from './search.module.scss';
import Modal from "../../components/generic/Modal";
import { debounce } from "../../utils/searchUtils";

const Search = ({ history }) => {
	let theme = window.localStorage.getItem('theme');
	const searchTerm = useRef('');
	const [predictions, setPredictions] = useState([]);

	const getCompanies = () => {
		if (!searchTerm.current.value) {
			setPredictions([]);
		} else {
			debounce(() => {
				fetchCompanies()
						.then(completions => {
							completions = completions.filter(company =>
								company.title ?
									company.title.toLowerCase().startsWith(searchTerm.current.value.toLowerCase()) :
									false
							);
							setPredictions(completions)
						})
						.catch(err => console.error(err));
				}, 1000)()
		}
	};

	const selectCompany = event => {
		const company = JSON.parse(event.target.dataset.company);
		for (const prop of Object.keys(company)) {
			searchTerm.current[prop] = company[prop];
		}
		searchTerm.current.value = company.title;
		setPredictions([]);
	};

	const navigateToCompanies = () => history.push('/companies');

	const ShowCompanies = () => {
		return (
			<ul className={styles.list}>
				{predictions.map((company, index) => (
					<li
						key={index}
						data-company={JSON.stringify(company)}
						className={theme === 'light' ? styles.item : styles.itemDark}
						onClick={selectCompany}>
						{company.title}
					</li>
				))}
			</ul>
		);
	};

	return (
		<>
			<div className="d-flex">
				<InputGroup size="lg">
					<Input
						innerRef={searchTerm}
						onChange={getCompanies}
						type="search"
						className="col-6"
						placeholder="Enter company name"
					/>
					<InputGroupAddon addonType="append">
						<Modal searchTerm={searchTerm} />
					</InputGroupAddon>
				</InputGroup>
				<Button color="success" className="col-2" onClick={navigateToCompanies}> View Companies </Button>
			</div>
			<ShowCompanies />
		</>
	);
};

export default withRouter(Search);
