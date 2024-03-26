"use client";
import { lusitana } from "@/app/font";
import { TextBox, Button } from "@/components";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { createAccount } from "@/lib/auth/actions";

import { useFormState, useFormStatus } from "react-dom";

export default function SignUpForm() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createAccount, initialState);

  return (
    <form action={dispatch} className='space-y-3'>
      <div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8'>
        <div className='flex flex-row text-center justify-center'>
          <h1 className={`${lusitana.className} mb-3 mt-5 text-2xl`}>
            Sign up to
          </h1>
          <Link
            href='/signup'
            className='ml-2 mb-3 mt-5 block  text-2xl font-medium text-blue-500'
          >
            My Todo
          </Link>
        </div>
        <div className='w-full'>
          <TextBox
            classLabel='mb-3 mt-5 block text-xs font-medium text-gray-900'
            classInput='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
            htmlFor='text'
            label='Full Name'
            id='fullName'
            type='text'
            name='fullName'
            isInline
            placeholder='Enter your Full Name'
            required
          />
          {state.errors?.fullName && (
            <div
              className='flex h-8 items-end space-x-1'
              aria-live='polite'
              aria-atomic='true'
            >
              <>
                <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
                <p className='text-sm text-red-500'>{state.errors?.fullName}</p>
              </>
            </div>
          )}

          <TextBox
            classLabel='mb-3 mt-5 block text-xs font-medium text-gray-900'
            classInput='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
            htmlFor='email'
            label='Email'
            id='email'
            type='email'
            name='email'
            isInline
            placeholder='Enter your email address'
            required
            icon={
              <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            }
          />
          {state.errors?.email && (
            <div
              className='flex h-8 items-end space-x-1'
              aria-live='polite'
              aria-atomic='true'
            >
              <>
                <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
                <p className='text-sm text-red-500'>{state.errors?.email}</p>
              </>
            </div>
          )}

          <div className='mt-4'>
            <TextBox
              classLabel='mb-3 mt-5 block text-xs font-medium text-gray-900'
              classInput='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
              htmlFor='password'
              label='Password'
              type='password'
              name='password'
              isInline
              placeholder='Enter password'
              required
              minLength={6}
              icon={
                <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              }
            />
            {state.errors?.password && (
              <div
                className='flex h-8 items-end space-x-1'
                aria-live='polite'
                aria-atomic='true'
              >
                <>
                  <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
                  <p className='text-sm text-red-500'>
                    {state.errors?.password}
                  </p>
                </>
              </div>
            )}
          </div>
          <div className='mt-4'>
            <TextBox
              classLabel='mb-3 mt-5 block text-xs font-medium text-gray-900'
              classInput='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
              htmlFor='confirmPassword'
              label='Confirm Password'
              id='confirmPassword'
              type='password'
              name='confirmPassword'
              placeholder='Enter Confirm password'
              required
              isInline
              minLength={6}
              icon={
                <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
              }
            />
            {state.errors?.confirmPassword && (
              <div
                className='flex h-8 items-end space-x-1'
                aria-live='polite'
                aria-atomic='true'
              >
                <>
                  <ExclamationCircleIcon className='h-5 w-5 text-red-500' />
                  <p className='text-sm text-red-500'>
                    {state.errors?.confirmPassword}
                  </p>
                </>
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-row text-center justify-center'>
          <h1 className={`mb-3 mt-5 block text-lg font-medium text-gray-900`}>
            Don't have an account?
          </h1>
          <Link
            href='/login'
            className='ml-2 mb-3 mt-5 block text-lg font-medium text-blue-500'
          >
            Sign In
          </Link>
        </div>

        <SigUpButton />
      </div>
    </form>
  );
}

function SigUpButton() {
  const { pending } = useFormStatus();

  return (
    <Button className='mt-4 w-full' aria-disabled={pending}>
      Create Account
    </Button>
  );
}
