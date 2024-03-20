import React from "react";

function page() {
  return (
    <div className='container mx-auto py-12 px-4'>
      <h1 className='text-3xl font-bold mb-8'>Contact Us</h1>
      <p className='mb-6'>
        Have any questions or feedback about our todo list app? Feel free to
        reach out to us using the form below.
      </p>
      <form className='grid grid-cols-1 gap-4'>
        <label htmlFor='name' className='text-gray-700'>
          Your Name:
        </label>
        <input
          type='text'
          id='name'
          name='name'
          className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500'
        />
        <label htmlFor='email' className='text-gray-700'>
          Your Email:
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500'
        />
        <label htmlFor='message' className='text-gray-700'>
          Message:
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          className='border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500'
        ></textarea>
        <button
          type='submit'
          className='bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default page;
