"use client";
import { Button, TextBox } from "@/components";
import { addTask } from "@/lib/todos/actions";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
// import { useFormState } from "react-dom";

export default function AddTaskForm({
  state,
  dispatch,
}: {
  state: any;
  dispatch: React.Dispatch<any>;
}) {
  const [formData, setFormData] = useState({
    taskName: "",
  });

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    dispatch({ state, formData: formData.taskName, isUpdating: true });
    setFormData({ taskName: "" }); // Clear the form data
  };
  // * Add a feature to strike through the label if the checkbox is checked
  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className='mt-4 flex items-center justify-between gap-2 md:mt-8'
      >
        <div className='flex flex-1 flex-shrink-0'>
          <TextBox
            classLabel='sr-only'
            classInput='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
            htmlFor='taskName'
            label={"Add Task"}
            isInline={false}
            id='taskName'
            type='text'
            name='taskName'
            placeholder='Enter your Task Name'
            value={formData.taskName} // Bind value to form state
            onChange={(e: any) =>
              setFormData({ ...formData, taskName: e.target.value })
            } // Update form state on input change
            required
          />
        </div>

        <Button
          type='submit'
          className='sw-auto w-3/12 justify-center bg-indigo-500  hover:bg-indigo-400 focus-visible:outline-indigo-500 active:bg-indigo-600'
        >
          <span className='hidden md:block'>Add Task</span>

          <PlusIcon className='ml-2 h-5 w-5 text-gray-50' />
        </Button>
      </form>
      {state && (
        <ul className='mt-3 p-10'>
          {state?.map((task: { name: any }, index: any) => (
            <li className='cursor-pointer ' key={index}>
              <div className='flex items-center'>
                <input
                  name='status'
                  type='checkbox'
                  className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='pending'
                  className='ml-2 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-slate-900'
                >
                  <span className='label-text'>{`${task.name}`}</span>
                </label>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
