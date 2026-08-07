import { useSelector } from "react-redux";

import TaskItem from "./TaskItem";

function TaskList() {
  const { items, filter } = useSelector((state) => state.tasks);

  const filteredTasks = items.filter((task) => {
    switch (filter) {
      case "active":
        return !task.completed;

      case "completed":
        return task.completed;

      default:
        return true;
    }
  });

  if (filteredTasks.length === 0) {
    return (
      <section>
        <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 py-12 text-center">
          <div className="mb-3 text-5xl">📝</div>

          <h2 className="text-lg font-semibold text-slate-800">
            No tasks found
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Add a new task or change the selected filter.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <ul className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
