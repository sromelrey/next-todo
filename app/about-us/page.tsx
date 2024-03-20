import React from "react";

function page() {
  return (
    <div className='container mx-auto py-12 px-4'>
      <h1 className='text-3xl font-bold mb-8'>About Us</h1>
      <p className='mb-6'>
        This todo list application was created to help you stay organized and
        manage your tasks efficiently. We believe in the power of simplicity and
        focus on providing a user-friendly experience.
      </p>
      <p>Here are some key features of our app:</p>
      <ul className='list-disc pl-4 mt-4'>
        <li>Create, edit, and delete tasks easily.</li>
        <li>Mark tasks as completed and track your progress.</li>
        <li>Intuitive and clean interface for a smooth user experience.</li>
      </ul>
      <p className='mt-6'>
        We are constantly working on improving the app and adding new features.
        Feel free to send us your feedback!
      </p>
    </div>
  );
}

export default page;
