import React, { useState } from 'react';
import { Modal as ReactstrapModal,
	ModalFooter,
	ModalHeader,
	ModalBody,
	Button
} from 'reactstrap';
import { connect } from 'react-redux';
import { addCompany } from "../../store/ActionCreators/Company";
import {debounce} from "../../utils/searchUtils";

const mapStateToProps = state => ({ companies: state.companies });
const mapDispatchToProps = dispatch => ({
	addCompany: company => dispatch(addCompany(company))
});

const Modal = ({ searchTerm, companies, addCompany }) => {
	const [modalState, setModalState] = useState(false);
	const [msg, setMsg] = useState("This Company is already submitted");
	const toggle = () => setModalState(!modalState);

	const postCompany = debounce(() => {
		const company = {
			id: searchTerm.current.id,
			title: searchTerm.current.title,
			description: searchTerm.current.description,
			timestamp: searchTerm.current.timestamp
		};
		addCompany(company);
		setMsg("The company is added successfully");
		toggle();
	}, 2000);

	const submitCompany = () => {
		try {
			if (companies.some(company => company.title === searchTerm.current.value)) {
				setMsg("This Company is already submitted");
				toggle();
			} else {
				postCompany();
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			<Button color="primary" onClick={submitCompany}> Submit </Button>
			<ReactstrapModal isOpen={modalState} toggle={toggle}>
				<ModalHeader toggle={toggle}> Information </ModalHeader>
				<ModalBody>
					<p> {msg} </p>
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}> Ok </Button>
				</ModalFooter>
			</ReactstrapModal>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
