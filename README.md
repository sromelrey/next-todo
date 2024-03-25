## Simple Todo List with Next.js 14 and NextAuth.js

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## To run this app locally

```bash
npm install # will install the packages
npm run dev
```

<!-- ABOUT THE PROJECT -->

## About The Project

Welcome to our Next.js Todo List App! This project is a simple yet powerful application built using Next.js, a popular React framework known for its performance, flexibility, and ease of use.

### Purpose

The purpose of this project is to provide users with a convenient way to manage their tasks and stay organized. Whether you're a student juggling assignments, a professional managing projects, or simply someone looking to keep track of daily chores, our todo list app is here to help you stay productive.

### Features

Task Management: Easily add, update, and delete tasks.
Date Picker: Select due dates for your tasks using a user-friendly date picker.
Task Details: View additional details for each task, such as its due date and completion status.
Responsive Design: Enjoy a seamless experience across devices, from desktops to mobile phones.
Customization: Personalize your todo list with custom task titles and due dates.
User Authentication: Coming soon! We're working on adding user authentication to allow multiple users to manage their own todo lists securely.

This is a simple todo list application that allows users to create, manage, and mark tasks as complete. Users can register and log in to keep track of their todos.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
.
├── app # Root application component contains all the routes, components, and logic for the application.
│ ├── (auth) # Route Group for Authentication
│ │ ├── login
│ │ └── signup
│ ├── about-us
│ ├── contact-us
│ ├── dashboard // Route Group for Authenticated Routes (assuming "dashboard" for authenticated area)
│ │ └── todo # todo Feature
│ ├── layout.tsx # Root layout component
│ ├── global.css # Global stylesheet (optional)
│ └── font.css # Root layout (optional)
├── components # Reusable UI components
│ └── sidenav
├── lib # Server actions , utilities and custom logic.
├── package.json
└── README.md

<!-- Features -->

## Current Features

- [x] Signup an account
- [x] Login authentication
- [x] Todo List Table
  - [x] Search Todo By Name
  - [ ] Search Todo By Date
  - [x] Edit/Update Todo List and Title
  - [x] Delete Todo Data
  - [x] View Todo Data
