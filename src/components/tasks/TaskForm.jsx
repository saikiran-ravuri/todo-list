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
    <section className="mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
        />

        <button
          type="submit"
          className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800 active:scale-[0.98]"
        >
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
