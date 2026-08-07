import TaskFilter from "./components/tasks/TaskFilter";
import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Todo List
          </h1>

          <p className="mt-3 text-slate-500">
            Organize your tasks with React, Redux Toolkit, and Tailwind CSS.
          </p>
        </header>

        <TaskForm />

        <TaskFilter />

        <TaskList />
      </div>
    </main>
  );
}

export default App;
