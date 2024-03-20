import React from "react";
import CreateTaskForm from "./create-task-form";
import { lusitana } from "@/app/font";

async function page() {
  return (
    <div className='flex w-full items-center'>
      <div className='w-full'>
        <h1
          className={`${lusitana.className} text-2xl text-center relative py-3 pl-6 pr-3`}
        >
          Create Todo Task
        </h1>
        <CreateTaskForm />
      </div>
    </div>
  );
}

export default page;
