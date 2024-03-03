import React, { Component } from "react";
import { useState } from "react";
import { Container, FormControl, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: "",
			filterValue: "",
			showModal: false,
		};
	}

	handleSearchChange = e => {
		this.setState({ searchTerm: e.target.value });
	};

	handleFilterChange = e => {
		this.setState({ filterValue: e.target.value });
	};

	handleClose = () => {
		this.setState({ showModal: false });
	};

	handleShow = () => {
		this.setState({ showModal: true });
	};

	render() {
		const { searchTerm, filterValue, showModal } = this.state;

		return (
			<Container>
				<div className='input-group'>
					<FormControl
						type='search'
						className='p-3'
						placeholder='Search students...'
						value={searchTerm}
						onChange={this.handleSearchChange}
					/>
					<select
						name='filter'
						id='filter'
						className='form-select p-3'
						value={filterValue}
						onChange={this.handleFilterChange}>
						<option value=''>All</option>
						<option value='n23'>N-23 Reactjs</option>
						<option value='f34'>F-34 Flutter</option>
						<option value='n45'>N-45 Vuejs</option>
						<option value='n47'>N-47 Nodejs</option>
						<option value='n48'>N-48 Angular</option>
						<option value='n49'>N-49 .NET</option>
					</select>
					<button className='btn btn-success p-3' onClick={this.handleShow}>
						Add Students
					</button>
				</div>

				<Modal show={showModal} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>
							<span className='bg-success p-2 rounded text-white'>New Students</span>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className='mb-3'>
							<label htmlFor='fristName' className='form-label'>
								<sup>
									<span className='text-danger'>#</span>
								</sup>
								FristName
							</label>
							<input
								type='text'
								className='form-control'
								id='fristName'
								name='fristName'
								placeholder='Your Frist Name'
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='lastName' className='form-label'>
								<sup>
									<span className='text-danger'>#</span>
								</sup>
								LastName
							</label>
							<input
								type='text'
								className='form-control'
								id='lastName'
								name='lastName'
								placeholder='Your Last Name'
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='filter-group' className='form-label'>
								Your Groups
							</label>
							<select name='filter-group' className='form-select' id='filter-group'>
								<option value=''>All</option>
								<option value='n23'>N-23 Reactjs</option>
								<option value='f34'>F-34 Flutter</option>
								<option value='n45'>N-45 Vuejs</option>
								<option value='n47'>N-47 Nodejs</option>
								<option value='n48'>N-48 Angular</option>
								<option value='n49'>N-49 .NET</option>
							</select>
						</div>
						<div className='mb-3'>
							<label htmlFor='userAge' className='form-label'>
								<sup>
									<span className='text-danger'>#</span>
								</sup>
								UserAge
							</label>
							<input
								type='text'
								className='form-control'
								id='userAge'
								name='userAge'
								placeholder='Your Age Numbers'
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='doesWork' className='form-checkbox mx-2'>
								<sup>
									<span className='text-danger'>#</span>
								</sup>
								DoesWorks
							</label>
							<input type='checkbox' className='form-checkbox' id='doesWork' name='doesWork' />
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={this.handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={this.handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</Container>
		);
	}
}

export default Header;
