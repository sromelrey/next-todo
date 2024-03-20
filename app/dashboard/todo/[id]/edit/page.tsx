import React from "react";
import EditTaskForm from "./edit-task-form";
import { lusitana } from "@/app/font";
import { fetchTodosById } from "@/lib/todos/data";

async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const fetchedData = await fetchTodosById(id);

  return (
    <div className='flex w-full items-center'>
      <div className='w-full'>
        <h1
          className={`${lusitana.className} text-2xl text-center relative py-3 pl-6 pr-3`}
        >
          Edit Todo Task
        </h1>
        <EditTaskForm data={fetchedData} />
      </div>
    </div>
  );
}

export default page;
