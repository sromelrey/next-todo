import React, { Suspense, useMemo, useState } from "react";
import { lusitana } from "@/app/font";
import { Button, Search, Table, TableRowSkeleton } from "@/components";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import { fetchedFilteredTasks } from "@/lib/todos/data";
import TableBody from "./todo-table-body";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className='w-full'>
      <div className='flex w-full items-center'>
        <div className='w-full'>
          <h1
            className={`${lusitana.className} text-2xl text-center relative py-3 pl-6 pr-3`}
          >
            My Todo's
          </h1>
          <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
            <Search placeholder={`Search todo's by title...`} />
            <Button className='sw-auto justify-center bg-indigo-500  hover:bg-indigo-400 focus-visible:outline-indigo-500 active:bg-indigo-600 '>
              <Link
                href='/dashboard/todo/create'
                className='flex h-10 items-center rounded-lgpx-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
              >
                <span className='hidden md:block'>Create Todo</span>

                <PlusIcon className='ml-2 h-5 w-5 text-gray-50' />
              </Link>
            </Button>
          </div>
          <Suspense fallback={<TableRowSkeleton />}>
            <Table>
              <TableBody query={query} />
            </Table>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
