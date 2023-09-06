# KanbanBoard-Task-Management
This project aims to create a task management website inspired by Trello, focusing on CRUD operations and drag-and-drop functionality for task status changes. By providing a user-friendly and efficient platform for task management, it will help individuals streamline their work and boost productivity.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Your machine should have npm and node.js installed to use it locally.

### Setup and Installation
- Fork Repo : ``` git clone https://github.com/4evrswati/KanbanBoard-Task-Management.git ```
#### Server Side
- npm install
- Create a ```.env``` file and add the following ```MONGODB_URL=YOUR_MONGODB_URL JWT_SECRET=YOUR_JWT_SECRET```
- node index.js
#### Client Side
- cd client
- Install dependencies : npm install
- Start the React Project : npm start
  
## Key Features
1. User Registration and Authentication
  - Users can create accounts or log in securely to access their task boards.
  - User authentication will ensure data privacy and security.
2. Task Management:
  - Users can create, read, edit and delete tasks.
  - Tasks will have attributes such as title and description.
  - Tasks can be categorized into different status columns (e.g., "To Do," "Doing," "Done") by drag and drop tasks between status columns.

## Technologies
  - Frontend : React
  - Backend : Node.js, Express.js
  - Database : MongoDB
  - Authentication : JWT(JSON Web Token)
  - Drag-and-Drop : Implement drag-and-drop functionality using libraries like React-beautiful-DnD

## View Live App
Hosted at[ Vercel](https://kanban-board-task-management-eta.vercel.app/).

## Screenshots
![Screenshot from 2023-09-06 23-51-23](https://github.com/4evrswati/KanbanBoard-Task-Management/assets/94286660/11d21fb4-2e17-492c-a398-cec95df19eea)
![Screenshot from 2023-09-06 23-51-06](https://github.com/4evrswati/KanbanBoard-Task-Management/assets/94286660/64afc405-ec09-4328-8a93-fbbb392be35e)


  
  
