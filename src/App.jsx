import TaskFilter from "./components/tasks/TaskFilter";
import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";

function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Todo List</h1>

          <p className="mt-2 text-slate-500">
            Stay organized. Focus on what matters.
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
