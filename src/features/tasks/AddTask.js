import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { addTask } from "./tasksSlice";

const AddTask = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const [radioValue, setRadioValue] = useState("Low");
	const [newTaskTitle, setNewTaskTitle] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = () => {
		dispatch(
			addTask({
				id: Math.random(),
				title: newTaskTitle,
				completed: "TO DO",
				priority: radioValue,
			})
		);
		setShow(false);
	};

	const radioOnChange = (e) => {
		setRadioValue(e.target.value);
	};
	console.log(radioValue);

	return (
		<>
			<button className="btn-comm" onClick={handleShow}>
				<span>+</span> Add Task
			</button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className="modal-heading-custom">
						Add New Task
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Add Title</Form.Label>
							<Form.Control
								type="text"
								placeholder=""
								onChange={(e) => setNewTaskTitle(e.target.value)}
								autoFocus
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<div className="mb-3 radio-btn-sec d-flex align-items-center">
								<div className="radio-btn-grp">
									<Form.Check
										inline
										name="group1"
										type="radio"
										value="High"
										id=""
										className="radio-input-custom"
										onChange={radioOnChange}
									/>
									<span
										className={
											radioValue === "High"
												? "radio-button-custom btn-comm btn-comm-sm active"
												: "radio-button-custom btn-comm btn-comm-sm"
										}
									>
										High
									</span>
								</div>
								<div className="radio-btn-grp">
									<Form.Check
										inline
										name="group1"
										type="radio"
										value="Medium"
										id=""
										className="radio-input-custom"
										onChange={radioOnChange}
									/>
									<span
										className={
											radioValue === "Medium"
												? "radio-button-custom btn-comm btn-comm-sm active"
												: "radio-button-custom btn-comm btn-comm-sm"
										}
									>
										Medium
									</span>
								</div>
								<div className="radio-btn-grp">
									<Form.Check
										inline
										name="group1"
										type="radio"
										value="Low"
										id=""
										className="radio-input-custom"
										onChange={radioOnChange}
									/>
									<span
										className={
											radioValue === "Low"
												? "radio-button-custom btn-comm btn-comm-sm active"
												: "radio-button-custom btn-comm btn-comm-sm"
										}
									>
										Low
									</span>
								</div>
							</div>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" className="btn-comm" onClick={handleSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default AddTask;
