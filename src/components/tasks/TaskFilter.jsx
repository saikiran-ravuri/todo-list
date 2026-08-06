import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../features/tasks/taskSlice";

function TaskFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  const filters = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <section className="mb-6">
      <div className="flex items-center justify-center gap-3">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => dispatch(setFilter(value))}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === value
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default TaskFilter;
