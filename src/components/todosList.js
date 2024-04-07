import React, { useContext, useState } from "react";
import { TasksContext } from "../reducer/TasksContext";

import { Modal, Button } from "react-bootstrap";

const todosList = () => {
	const [show, setShow] = useState(false);
	const [task, setTask] = useState("Low");
	const [taskTitle, setTaskTitle] = useState("");
	const [taskCompleted, setTaskCompleted] = useState("Todo");

	const { message, todos, addTodo, editTodo } = useContext(TasksContext);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = () => {
		addTodo({
			id: Math.random(),
			title: taskTitle,
			completed: taskCompleted,
			priority: task,
		});
	};

	console.log("task", task);
	const radioOptions = ["High", "Medium", "Low"];

	const completedOptions = ["To do", "In Progress", "Done"];

	/* const handleEdit = (id, value) => {
		setTaskCompleted(value);
		console.log("edit", id, value);
		editTodo({ id, completed: taskCompleted });
	}; */

	console.log(message, todos);
	return (
		<div>
			{message}

			<button className="btn btn-info" onClick={handleShow}>
				Add Task
			</button>

			{todos.map((todo, i) => {
				return (
					<li key={i}>
						<h5>{todo.title}</h5>
						{todo.priority === "High" && (
							<p className="text-info">
								<strong>High</strong>
							</p>
						)}
						{todo.priority === "Medium" && (
							<p className="text-warning">
								<strong>Medium</strong>
							</p>
						)}
						{todo.priority === "Low" && (
							<p className="text-info">
								<strong>Low</strong>
							</p>
						)}
						{todo.completed === "Todo" && (
							<button
								className="btn btn-warning"
								name="progress"
								value="In Progress"
								onClick={(e) =>
									editTodo({ id: todo.id, completed: e.target.value })
								}
							>
								To do
							</button>
						)}
						{todo.completed === "In Progress" && (
							<button
								className="btn btn-primary"
								name=""
								value="Done"
								onClick={(e) =>
									editTodo({ id: todo.id, completed: e.target.value })
								}
							>
								In Progress
							</button>
						)}
						{todo.completed === "Done" && (
							<button
								className="btn btn-danger"
								value="Todo"
								onClick={(e) =>
									editTodo({ id: todo.id, completed: e.target.value })
								}
							>
								Done
							</button>
						)}
						<div className="progress-bar html"></div>
					</li>
				);
			})}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<input
							type="text"
							name=""
							value={taskTitle}
							onChange={(e) => setTaskTitle(e.target.value)}
						/>
						{radioOptions.map((item) => (
							<div>
								<input
									type="radio"
									value={item}
									name="radio"
									onChange={(e) => setTask(e.target.value)}
								/>
								<label>{item}</label>
							</div>
						))}

						{/* {taskCompleted === "Todo" && (
							<button
								className="btn btn-warning"
								name="progress"
								onClick={(e) => setTaskCompleted("In Progress")}
							>
								To do
							</button>
						)}

						{taskCompleted === "In Progress" && (
							<button
								className="btn btn-primary"
								onClick={() => setTaskCompleted("Done")}
							>
								In Progress
							</button>
						)}

						{taskCompleted === "Done" && (
							<button
								className="btn btn-danger"
								onClick={() => setTaskCompleted("Todo")}
							>
								Done
							</button>
						)} */}
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" type="submit" onClick={handleSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default todosList;
