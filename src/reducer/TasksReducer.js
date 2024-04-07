import { ACTIONS } from "./TasksProvider";

export function TasksReducer(state, action) {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			console.log(state, action.payload);
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case ACTIONS.EDIT_TODO:
			let id = action.payload.id;
			let completed = action.payload.completed;
			console.log("reducer", id, completed, action.payload);
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === id ? { ...todo, completed } : todo
				),
			};
		default:
			return state;
	}
}
