import { useDispatch } from "react-redux";

import { deleteTask, toggleTask } from "../../features/tasks/taskSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex flex-1 items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          className="h-5 w-5 cursor-pointer accent-slate-900"
        />

        <span
          className={`flex-1 break-words text-base font-medium ${
            task.completed ? "text-slate-400 line-through" : "text-slate-800"
          }`}
        >
          {task.title}
        </span>
      </div>

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
