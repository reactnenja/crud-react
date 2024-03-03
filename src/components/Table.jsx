import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Table extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			students: [
				{
					id: 0,
					fristName: "Samandar",
					lastName: "Faxriddinov",
					age: 19,
					group: "N23 - Reactjs",
					doesWork: false,
				},
				{
					id: 1,
					fristName: "Samandar",
					lastName: "Ahadjonov",
					age: 23,
					group: "N34 - Flutter",
					doesWork: true,
				},
				{
					id: 2,
					fristName: "Abror",
					lastName: "Axmadov",
					age: 25,
					group: "N23 - Reactjs",
					doesWork: false,
				},
			],
		};
	}
	filterStudents = filter => {
		// Filter students based on selected group
		// Update state with filtered students
		// For example:
		const filteredStudents = this.state.students.filter(student =>
			student.group.toLowerCase().includes(filter)
		);
		this.setState({ students: filteredStudents });
	};

	searchStudents = searchTerm => {
		// Search students based on search term
		// Update state with filtered students
		// For example:
		const searchedStudents = this.state.students.filter(
			student =>
				student.firstName.toLowerCase().includes(searchTerm) ||
				student.lastName.toLowerCase().includes(searchTerm).to
		);
		this.setState({ students: searchedStudents });
	};

	render() {
		const { students } = this.state;
		return (
			<div className='container my-5'>
				<table className='table table-hover table-border border-1 '>
					<thead>
						<tr>
							<th className='border-right border-1'>#</th>
							<th className='border-right border-1'>FristName</th>
							<th className='border-right border-1'>LastName</th>
							<th className='border-right border-1'>Age</th>
							<th className='border-right border-1'>Groups</th>
							<th className='border-right border-1'>DoesWorks</th>
							<th className='border-right border-1'>Edit / Delete</th>
						</tr>
					</thead>
					<tbody>
						{students.map((item, i) => (
							<tr key={item.id}>
								<td className='border-right border-1'>{i + 1}</td>
								<td className='border-right border-1'>{item.fristName}</td>
								<td className='border-right border-1'>{item.lastName}</td>
								<td className='border-right border-1'>{item.age}</td>
								<td className='border-right border-1'>{item.group}</td>
								<td className='border-right border-1'>{item.doesWork ? "✅" : "❌"}</td>
								<td className='text-right border-right border-1'>
									<button className='btn mx-2 btn-warning'>Edit</button>
									<button className='btn btn-danger'>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;
