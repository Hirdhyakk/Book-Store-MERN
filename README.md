# Book-Store Project

Welcome to my Book-Store project repository. This project is a book management system developed using the MERN stack (MongoDB, Express.js, React, and Node.js).

## Introduction

This project is a Book-Store management system that allows users to manage book information. It includes functionality for adding, updating, and deleting book records, as well as viewing the list of books.

## Features

- Add new book records
- Update existing book records
- Delete book records
- View all book records

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**

    ```bash
    git clone https://github.com/Hirdhyakk/Book-Store-MERN
    ```

2. **Navigate to the project directory**

    ```bash
    cd Book-Store-MERN
    ```

3. **Install server dependencies**

    ```bash
    cd mern-server
    npm install
    ```

4. **Install client dependencies**

    ```bash
    cd ../mern-client
    npm install
    ```

5. **Set up the database**

    - Make sure MongoDB is installed and running on your machine.
    - Create a `.env` file in the `server` directory and add your MongoDB URI:

    ```env
    MONGO_URI=your_mongodb_uri
    ```

6. **Run the application**

    - Start the server:

    ```bash
    cd ../mern-server
    npm start
    ```

    - Start the client:

    ```bash
    cd ../mern-client
    npm start
    ```

7. **Open your browser**

    - Navigate to `http://localhost:3000` to view the application.

## Usage

Once the application is running, you can use the web interface to manage books. The interface allows you to add, update, delete, and view books.
