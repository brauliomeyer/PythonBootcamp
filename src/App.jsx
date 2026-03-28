import { useMemo, useState } from 'react';

const STORAGE_KEY = 'todo-app-items-v1';

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function reorder(items, from, to) {
  const next = [...items];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}

export default function App() {
  const [todos, setTodos] = useState(loadTodos);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [draggedId, setDraggedId] = useState(null);

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((todo) => !todo.completed);
    if (filter === 'completed') return todos.filter((todo) => todo.completed);
    return todos;
  }, [todos, filter]);

  function updateTodos(next) {
    setTodos(next);
    saveTodos(next);
  }

  function addTodo(e) {
    e.preventDefault();
    const trimmed = newTodo.trim();
    if (!trimmed) return;

    updateTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: trimmed,
        completed: false,
      },
    ]);
    setNewTodo('');
  }

  function toggleComplete(id) {
    updateTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function removeTodo(id) {
    updateTodos(todos.filter((todo) => todo.id !== id));
  }

  function startEdit(todo) {
    setEditingId(todo.id);
    setEditingText(todo.text);
  }

  function commitEdit(id) {
    const trimmed = editingText.trim();
    if (!trimmed) {
      removeTodo(id);
    } else {
      updateTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo))
      );
    }
    setEditingId(null);
    setEditingText('');
  }

  function handleDragStart(id) {
    setDraggedId(id);
  }

  function handleDrop(targetId) {
    if (!draggedId || draggedId === targetId) return;
    const from = todos.findIndex((todo) => todo.id === draggedId);
    const to = todos.findIndex((todo) => todo.id === targetId);
    if (from < 0 || to < 0) return;
    updateTodos(reorder(todos, from, to));
    setDraggedId(null);
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <main className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-5 shadow-lg sm:p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Todos</h1>
          <p className="mt-2 text-sm text-slate-500">Minimal, responsive task manager</p>
        </header>

        <form className="mb-6 flex gap-2" onSubmit={addTodo}>
          <input
            className="w-full rounded-xl border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-slate-500"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a task..."
            aria-label="New todo"
          />
          <button
            type="submit"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Add
          </button>
        </form>

        <div className="mb-4 flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'All' },
            { key: 'active', label: 'Active' },
            { key: 'completed', label: 'Complete' },
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                filter === item.key
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <ul className="space-y-2">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              draggable
              onDragStart={() => handleDragStart(todo.id)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(todo.id)}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="h-5 w-5 cursor-pointer rounded border-slate-300 text-slate-700 focus:ring-slate-500"
                aria-label={`Mark ${todo.text} complete`}
              />

              {editingId === todo.id ? (
                <input
                  autoFocus
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={() => commitEdit(todo.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') commitEdit(todo.id);
                    if (e.key === 'Escape') {
                      setEditingId(null);
                      setEditingText('');
                    }
                  }}
                  className="w-full rounded-lg border border-slate-300 px-2 py-1 text-sm outline-none focus:border-slate-500"
                  aria-label="Edit todo"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => startEdit(todo)}
                  className={`w-full text-left text-sm ${
                    todo.completed ? 'text-slate-400 line-through' : 'text-slate-700'
                  }`}
                >
                  {todo.text}
                </button>
              )}

              <button
                type="button"
                onClick={() => removeTodo(todo.id)}
                className="rounded-lg px-2 py-1 text-xs text-rose-500 transition hover:bg-rose-50"
                aria-label={`Delete ${todo.text}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {filteredTodos.length === 0 && (
          <p className="py-10 text-center text-sm text-slate-400">No tasks in this filter.</p>
        )}
      </main>
    </div>
  );
}
