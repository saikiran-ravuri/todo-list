import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../../features/tasks/taskSlice";

function TaskForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    dispatch(addTask(trimmedTitle));

    setTitle("");
  };

  return (
    <section className="mb-6">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        />

        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800 active:scale-[0.98]"
        >
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
