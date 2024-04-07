import { useState } from "react";
import { useDispatch } from "react-redux";

import { editTaskCompleted } from "./tasksSlice";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

import { Circle } from "rc-progress";

const TaskListItem = ({ task }) => {
	const dispatch = useDispatch();
	const [taskProgress, setTaskProgress] = useState(0);

	const handleComplete = (e) => {
		dispatch(editTaskCompleted({ id: task.id, completed: e.target.value }));
		if (e.target.value === "TO DO") setTaskProgress(0);
		if (e.target.value === "In Progress") setTaskProgress(50);
		if (e.target.value === "Done") setTaskProgress(100);
	};

	let toggleButton;
	if (task.completed === "TO DO") {
		toggleButton = (
			<button
				className="btn-comm btn-sm"
				value="In Progress"
				onClick={handleComplete}
			>
				Todo
			</button>
		);
	} else if (task.completed === "In Progress") {
		toggleButton = (
			<button
				className="btn-comm btn-sm btn-progress"
				value="Done"
				onClick={handleComplete}
			>
				In Progress
			</button>
		);
	} else if (task.completed === "Done") {
		toggleButton = (
			<button
				className="btn-comm btn-sm btn-done"
				value="TO DO"
				onClick={handleComplete}
			>
				Done
			</button>
		);
	}

	/* console.log("completed", task.completed); */

	return (
		<>
			<div className="col-12 taskBox-sec">
				<h2 className="taskBox-heading">
					<span className="taskBox-subheading">Task</span> {task.title}
				</h2>
				<p className="taskBox-priority">
					<span className="taskBox-subheading">Priority</span> {task.priority}
				</p>
				<div className="taskBox-completed">{toggleButton}</div>
				<Circle
					percent={taskProgress}
					strokeWidth={6}
					strokeColor="#45ef33"
					className="circle-bar"
					trailColor="#ffffff"
					trailWidth={4}
				/>
				<div className="taskBox-edit d-flex align-items-center">
					<div className="taskBox-editBox">
						<EditTask task={task} />
					</div>
					<div className="taskBox-editBox">
						<DeleteTask taskId={task.id} />
					</div>
				</div>
			</div>
		</>
	);
};

export default TaskListItem;
