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
    <section className="mb-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => dispatch(setFilter(value))}
            className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              filter === value
                ? "bg-slate-900 text-white shadow-md"
                : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
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
