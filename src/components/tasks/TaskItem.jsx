import { useDispatch } from "react-redux";

import { deleteTask } from "../../features/tasks/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <span className="flex-1 break-words text-base font-medium text-slate-800">
        {task.title}
      </span>

      <button
        type="button"
        onClick={() => dispatch(deleteTask(task.id))}
        className="shrink-0 rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600 active:scale-[0.98]"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
