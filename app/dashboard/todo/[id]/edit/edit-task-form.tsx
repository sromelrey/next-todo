"use client";
import { addTask, updateTodo } from "@/lib/todos/actions";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { formatDateToLocal } from "@/lib/helpers";
import DatePicker from "../../task-form/date-picker";
import AddTaskForm from "../../task-form/add-task-form";
import { TextBox } from "@/components";

export type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export default async function editTaskForm({ data }: any) {
  const [dateSelected, onChange] = useState<Value>(null);
  const [todoTitle, setTodoTitle] = useState<string>(data.tasks[0].title);
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, dispatch] = useFormState(updateTodo, null);
  const [stateAddTask, dispatchAddTask] = useFormState(addTask, null);

  const handleSaveTodo = (e: any) => {
    e.preventDefault();

    dispatch({
      id: data.id,
      dateSelected: data.date
        ? formatDateToLocal(`${data.date?.toString()}`)
        : "",
      todoTitle: inputRef.current?.value,
      stateAddTask: stateAddTask ? stateAddTask : data.tasks[0].todos,
    } as unknown as FormData);
  };

  return (
    <div className='rounded-md bg-gray-50 p-4 md:p-6'>
      <DatePicker disabled dateSelected={dateSelected} onChange={onChange} />

      <div className='mb-4'>
        <label htmlFor='amount' className='mb-2 block text-sm font-medium'>
          Selected Date
        </label>
        <input
          type='text'
          className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-300 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
          disabled
          defaultValue={
            data.date ? formatDateToLocal(`${data.date?.toString()}`) : ""
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
      <TextBox
        classLabel='mb-3 mt-5 block text-xs font-medium text-gray-900'
        classInput='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
        htmlFor='title'
        label='Title'
        id='title'
        type='title'
        name='title'
        placeholder='Enter your title'
        required
        defaultValue={data.tasks[0].title}
        inputRef={inputRef} // Pass the ref
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

      <AddTaskForm
        state={stateAddTask ? stateAddTask : data.tasks[0].todos}
        dispatch={dispatchAddTask}
      />
      <button
        type='submit'
        className='w-full rounded-md mt-2 border p-2 text-white bg-indigo-500  hover:bg-indigo-400 focus-visible:outline-indigo-500 active:bg-indigo-600 '
        onClick={handleSaveTodo}
      >
        Update Todo
      </button>
    </div>
  );
}
