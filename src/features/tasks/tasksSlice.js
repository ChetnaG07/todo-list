import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		title: "Do something nice for someone I care about",
		completed: "TO DO",
		priority: "Low",
	},
	{
		id: 2,
		title: "Watch a classic movie",
		completed: "TO DO",
		priority: "Low",
	},
	{
		id: 3,
		title: "Buy a new house decoration",
		completed: "TO DO",
		priority: "Low",
	},
	{
		id: 4,
		title: "Bake pastries for me and neighbor",
		completed: "TO DO",
		priority: "Low",
	},
	{
		id: 5,
		title: "Go see a Broadway production",
		completed: "TO DO",
		priority: "Low",
	},
];

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.push(action.payload);
		},
		editTaskCompleted: (state, action) => {
			const { id, completed } = action.payload;
			const task = state.find((task) => task.id === id);
			if (task) {
				task.completed = completed;
			}
		},

		editTask: (state, action) => {
			const { id, priority, title } = action.payload;
			const task = state.find((task) => task.id === id);
			if (task) {
				task.priority = priority;
				task.title = title;
			}
		},

		deleteTask: (state, action) => {
			const filteredTasks = state.filter((task) => task.id !== action.payload);
			return filteredTasks;
		},
	},
});

export const selectAllTasks = (state) => state.tasks;

export const { editTaskCompleted, addTask, editTask, deleteTask } =
	tasksSlice.actions;

export default tasksSlice.reducer;
