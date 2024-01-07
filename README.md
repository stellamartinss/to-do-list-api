# Project Name

RESTful API server for managing tasks. The first version of this API supports the following operations:

- Retrive a list of tasks
- Add a new task
- Edit a task
- Delete a task

It uses sequelize as the ORM and MySQL database to store and retrive data.

## Prerequisites

- Node.js version v14.19.3
- npm
- MySQL (Ensure the MySQL database is running)


## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run Sequelize migration:
    ```bash
    npx sequelize-cli db:migrate
    ```

3. Start the application:

    ```bash
    npm start
    ```

