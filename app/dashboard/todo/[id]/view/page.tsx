import { lusitana } from "@/app/font";
import { Card } from "@/components";
import { fetchTodosById } from "@/lib/todos/data";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const fethedTodos = await fetchTodosById(id);
  return (
    <div>
      {fethedTodos.tasks.map((task: { todos: any; title: string }) => (
        <Card title={task.title}>
          {task?.todos?.length > 0 && (
            <ul className='mt-3 p-10'>
              {task?.todos?.map((task: { name: any }, index: any) => (
                <li className='cursor-pointer ' key={index}>
                  <div className='flex items-center'>
                    <input
                      name='status'
                      type='checkbox'
                      className='w-4 h-4 mr-2 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label
                      htmlFor='pending'
                      className={`${lusitana.className}
                      truncate rounded-xl bg-white px-3 py-3 text-center text-2xl`}
                    >
                      <span className='label-text'>{`${task.name}`}</span>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </div>
  );
}
