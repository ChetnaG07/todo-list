import React, { useReducer } from "react";
import { TasksContext } from "./TasksContext";
import { TasksReducer } from "./TasksReducer";

const initialState = {
	todos: [
		{
			id: 1,
			title: "Hey please works..this time....",
			completed: "To do",
			priority: "Low",
		},
		{
			id: 2,
			title: "Hey please works..this time....",
			completed: "To do",
			priority: "Low",
		},
	],
};

export const ACTIONS = {
	ADD_TODO: "ADD_TODO",
	EDIT_TODO: "EDIT_TODO",
};

const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TasksReducer, initialState);

	const addTodo = (newTasks) => {
		console.log(newTasks);
		dispatch({
			type: ACTIONS.ADD_TODO,
			payload: newTasks,
		});
	};

	const editTodo = ({ id, completed }) => {
		console.log("edit", id, completed);
		dispatch({
			type: ACTIONS.EDIT_TODO,
			payload: { id, completed },
		});
	};

	return (
		<TasksContext.Provider
			value={{
				message: "Trying to focus...!!!",
				todos: state.todos,
				addTodo,
				editTodo,
			}}
		>
			{children}
		</TasksContext.Provider>
	);
};

export default TasksProvider;
