"use client";
import { addTask, createTodo } from "@/lib/todos/actions";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { formatDateToLocal } from "@/lib/helpers";
import DatePicker from "../task-form/date-picker";
import AddTaskForm from "../task-form/add-task-form";

export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function createTaskForm() {
  const [dateSelected, onChange] = useState<Value>(null);
  const [todoTitle, setTodoTitle] = useState<string>("");

  const [state, dispatch] = useFormState(createTodo, null);
  const [stateAddTask, dispatchAddTask] = useFormState(addTask, null);

  const handleSaveTodo = (e: any) => {
    e.preventDefault();
    dispatch({
      dateSelected: dateSelected
        ? formatDateToLocal(`${dateSelected?.toString()}`)
        : "",
      todoTitle,
      stateAddTask,
    } as unknown as FormData);
  };

  return (
    <div className='rounded-md bg-gray-50 p-4 md:p-6'>
      <DatePicker dateSelected={dateSelected} onChange={onChange} />

      <div className='mb-4'>
        <label htmlFor='amount' className='mb-2 block text-sm font-medium'>
          Selected Date
        </label>
        <input
          type='text'
          className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-300 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
          disabled
          value={
            dateSelected ? formatDateToLocal(`${dateSelected?.toString()}`) : ""
          }
        />
        {state?.errors?.date ? (
          <div
            id='customer-error'
            aria-live='polite'
            className='mt-2 text-sm text-red-500'
          >
            {state.errors.date.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>

      <div className='mb-4'>
        <label htmlFor='amount' className='mb-2 block text-sm font-medium'>
          Title
        </label>
        <input
          type='text'
          className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-300 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
          onChange={(e: any) => setTodoTitle(e.target.value)} // Update form state on input change
          required
          value={todoTitle}
        />
        {state?.errors?.title ? (
          <div
            id='customer-error'
            aria-live='polite'
            className='mt-2 text-sm text-red-500'
          >
            {state.errors.title.map((error: string) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
      <AddTaskForm state={stateAddTask} dispatch={dispatchAddTask} />
      <button
        type='submit'
        className='w-full rounded-md mt-2 border p-2 text-white bg-indigo-500  hover:bg-indigo-400 focus-visible:outline-indigo-500 active:bg-indigo-600 '
        onClick={handleSaveTodo}
      >
        Save Todo
      </button>
    </div>
  );
}
