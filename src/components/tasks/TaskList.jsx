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
        <div className="rounded-xl border-2 border-dashed border-slate-300 py-12 text-center">
          <p className="text-slate-500">No tasks found.</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <ul className="space-y-3">
        {filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
