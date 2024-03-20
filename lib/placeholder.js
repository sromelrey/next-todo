const todos = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    date: "2024-03-17",
    tasks: [
      {
        title: "Create Login",
        todos: [
          { name: "Create Login Form", status: "done" },
          { name: "Integrate Authentication", status: "done" },
          {
            name: "Modify Login UI for Mobile Responsiveness",
            status: "pending",
          },
        ],
      },
      {
        title: "Create SignUp",
        todos: [
          { name: "Create SignUp Form", status: "pending" },
          { name: "Integrate SignUp with API", status: "pending" },
          {
            name: "Modify SignUp UI for Mobile Responsiveness",
            status: "pending",
          },
        ],
      },
    ],
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    date: "2024-03-18",
    tasks: [
      {
        title: "Create table Component",
        todos: [
          { name: "Create table Component", status: "done" },
          { name: "Integrate with API", status: "done" },
          { name: "", status: "done" },
          {
            name: "Modify Login UI for Mobile Responsiveness",
            status: "pending",
          },
        ],
      },
      {
        title: "Create SignUp",
        todos: [
          { name: "Create SignUp Form", status: "pending" },
          { name: "Integrate SignUp with API", status: "pending" },
          {
            name: "Modify SignUp UI for Mobile Responsiveness",
            status: "pending",
          },
        ],
      },
    ],
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    date: "2024-03-19",
    tasks: [
      {
        title: "Develop API Endpoints",
        todos: [
          { name: "Define data models", status: "done" },
          { name: "Write API documentation", status: "done" },
          {
            name: "Implement authentication and authorization",
            status: "pending",
          },
        ],
      },
      {
        title: "Deploy Application",
        todos: [
          { name: "Configure deployment environment", status: "pending" },
          { name: "Push code to production server", status: "pending" },
          { name: "Run automated tests", status: "pending" },
        ],
      },
    ],
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    date: "2024-03-20",
    tasks: [
      {
        title: "Write Unit Tests",
        todos: [
          { name: "Test individual components", status: "pending" },
          { name: "Test API interactions", status: "pending" },
          { name: "Ensure proper error handling", status: "pending" },
        ],
      },
      {
        title: "Write Integration Tests",
        todos: [
          { name: "Test interactions between components", status: "done" },
          { name: "Test overall application flow", status: "pending" },
        ],
      },
    ],
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    date: "2024-03-21",
    tasks: [
      {
        title: "Create Documentation",
        todos: [
          { name: "Write user guides", status: "pending" },
          { name: "Document API endpoints", status: "pending" },
          { name: "Develop a developer portal (optional)", status: "pending" },
        ],
      },
      {
        title: "Conduct User Acceptance Testing (UAT)",
        todos: [
          { name: "Gather user feedback", status: "pending" },
          { name: "Address any usability issues", status: "pending" },
          { name: "Finalize the product", status: "pending" },
        ],
      },
    ],
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    date: "2024-03-22",
    tasks: [
      {
        title: "Perform Performance Optimization",
        todos: [
          { name: "Identify performance bottlenecks", status: "done" },
          { name: "Implement caching mechanisms", status: "done" },
          { name: "Optimize code for efficiency", status: "pending" },
        ],
      },
      {
        title: "Deploy Updates Regularly",
        todos: [
          { name: "Fix bugs and address issues", status: "pending" },
          { name: "Implement new features", status: "pending" },
          { name: "Maintain code quality", status: "pending" },
        ],
      },
    ],
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    date: "2024-03-23",
    tasks: [
      {
        title: "Set Up Monitoring and Logging",
        todos: [
          { name: "Monitor application health", status: "pending" },
          { name: "Track errors and exceptions", status: "pending" },
          { name: "Log user activity (optional)", status: "pending" },
        ],
      },
      {
        title: "Implement Security Measures",
        todos: [
          { name: "Prevent unauthorized access", status: "done" },
          { name: "Secure data transmission", status: "done" },
          { name: "Regularly update security patches", status: "done" },
        ],
      },
    ],
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    date: "2024-03-24",
    tasks: [
      {
        title: "Develop Backup and Recovery Plan",
        todos: [
          { name: "Define backup frequency and strategy", status: "pending" },
          {
            name: "Choose a reliable backup storage solution",
            status: "pending",
          },
          { name: "Test disaster recovery procedures", status: "pending" },
        ],
      },
      {
        title: "Plan for Future Enhancements",
        todos: [
          { name: "Gather user feedback and feature requests", status: "done" },
          { name: "Prioritize future development efforts", status: "done" },
          {
            name: "Maintain a roadmap for continuous improvement",
            status: "pending",
          },
        ],
      },
    ],
  },
  {
    id: "3958dc9e-749f-4377-85e9-fec4b6a6442a",
    date: "2024-03-25",
    tasks: [
      {
        title: "Deploy Application",
        todos: [
          { name: "Prepare deployment scripts", status: "pending" },
          { name: "Test deployment process", status: "pending" },
          { name: "Monitor deployment for issues", status: "pending" },
        ],
      },
      {
        title: "Create User Documentation",
        todos: [
          { name: "Write user guide", status: "pending" },
          { name: "Create video tutorials", status: "pending" },
          { name: "Publish documentation", status: "pending" },
        ],
      },
    ],
  },
  {
    id: "3958dc9e-750f-4377-85e9-fec4b6a6442a",
    date: "2024-03-26",
    tasks: [
      {
        title: "Plan Next Sprint",
        todos: [
          { name: "Review project backlog", status: "pending" },
          { name: "Prioritize user stories", status: "pending" },
          { name: "Estimate story points", status: "pending" },
        ],
      },
      {
        title: "Conduct Team Meeting",
        todos: [
          { name: "Discuss progress and challenges", status: "pending" },
          { name: "Assign tasks for next sprint", status: "pending" },
          { name: "Set team goals", status: "pending" },
        ],
      },
    ],
  },
];

module.exports = {
  todos,
};
