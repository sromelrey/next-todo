import clsx from "clsx";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}

export function UpdateButton({ href }: { href: string }) {
  return (
    <Link href={href} className='rounded-md border p-2 hover:bg-gray-100'>
      <PencilIcon className='w-5' />
    </Link>
  );
}
type DeleteTodoAction = (
  id: string
) => Promise<{ message: string } | undefined>;

export function DeleteButton({
  id,
  action,
}: {
  id: string;
  action: DeleteTodoAction;
}) {
  const deleteItemWithId = action.bind(null, id);
  return (
    <form action={deleteItemWithId}>
      <button className='rounded-md border p-2 hover:bg-gray-100'>
        <span className='sr-only'>Delete</span>
        <TrashIcon className='w-5' />
      </button>
    </form>
  );
}

export function ViewButton({ href }: { href: string }) {
  return (
    <Link href={href} className='rounded-md border p-2 hover:bg-gray-100'>
      <EyeIcon className='w-5' />
    </Link>
  );
}
