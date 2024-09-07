# MERN E-Commerce Website

This is a full-stack e-commerce website built using the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- User authentication (signup, login, logout)
- Product browsing and searching
- Shopping cart functionality
- Secure checkout process
- User profile management
- Admin panel for product and order management

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Installation

1. Clone the repository:
2. Install server dependencies: npm install
3. Install client dependencies:cd client
   npm install
4. Create a `.env` file in the root directory and add your MongoDB URI and JWT secret:
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret

## Running the Application

1. Start the server:
   npm run server
2. In a separate terminal, start the client:
   cd client
   npm start
3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `/api/auth` - Authentication routes
- `/api/products` - Product routes
- `/api/users` - User routes
- `/api/orders` - Order routes

<!-- ## Technologies Used

- MongoDB - Database
- Express.js - Web application framework
- React.js - Frontend framework
- Node.js - Runtime environment
- Redux - State management
- Mongoose - MongoDB object modeling
- JSON Web Tokens - Authentication
- Bcrypt - Password hashing -->


## Technologies Used

- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) - Database
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) - Web application framework
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) - Frontend framework
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) - Runtime environment
- ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) - State management
- ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) - MongoDB object modeling
- ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) - Authentication
- ![Bcrypt](https://img.shields.io/badge/Bcrypt-003A70?style=for-the-badge&logo=bcrypt&logoColor=white) - Password hashing
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
