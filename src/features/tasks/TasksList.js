import React from "react";
import { useSelector } from "react-redux";
import { selectAllTasks } from "./tasksSlice";

import TaskListItem from "./TaskListItem";
import AddTask from "./AddTask";

const TasksList = () => {
	const tasks = useSelector(selectAllTasks);

	/* console.log(tasks); */

	const orderedTasksList = tasks.slice().sort((a, b) => b.id - a.id);

	console.log(orderedTasksList);

	let content;

	content = orderedTasksList.map((task) => (
		<TaskListItem key={task.id} task={task} />
	));

	return (
		<>
			<div className="main-sec d-flex align-items-center">
				<div className="tasks-box">
					<div className="topsection d-flex align-items-center justify-content-between">
						<h2 className="taskHeading mb-0">Task List</h2>

						<AddTask />
					</div>
					<div className="tasks-list-box">
						<div className="row">{content}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TasksList;
