'use client';

import { useTodos } from '@/hooks/useTodos';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';

export default function Home() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            📝 我的待办事项
          </h1>
          
          <TodoInput onAddTodo={addTodo} />
          
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              任务列表 ({todos.length})
            </h2>
            <TodoList 
              todos={todos} 
              onToggle={toggleTodo} 
              onDelete={deleteTodo} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}