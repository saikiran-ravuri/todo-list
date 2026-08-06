import { useSelector } from "react-redux";

import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);

  if (tasks.length === 0) {
    return (
      <section>
        <div className="rounded-xl border-2 border-dashed border-slate-300 py-12 text-center">
          <p className="text-slate-500">No tasks yet. Add your first task.</p>
        </div>
      </section>
    );
  }

  return (
    <section>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
