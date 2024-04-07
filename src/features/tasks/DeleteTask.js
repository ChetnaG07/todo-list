import { useDispatch } from "react-redux";
import { deleteTask } from "./tasksSlice";
import { RiDeleteBinFill } from "react-icons/ri";

const DeleteTask = ({ taskId }) => {
	const dispatch = useDispatch();

	return (
		<div>
			<RiDeleteBinFill onClick={() => dispatch(deleteTask(taskId))} />
		</div>
	);
};

export default DeleteTask;
