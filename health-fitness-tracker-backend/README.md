- Health & Fitness Tracker - Backend
This is the backend for the Health & Fitness Tracker app. It provides a RESTful API that handles user authentication, exercise logging, goal tracking, and progress retrieval. The backend is built using Node.js, Express, and MongoDB.

- Features:
User authentication using JWT (JSON Web Token).

CRUD operations for user profiles, exercise logs, goals, and progress tracking.

Secure API endpoints with JWT verification middleware.

MongoDB as the database, connected via MongoDB Atlas.

Deployed on DigitalOcean for a stable production environment.

- Technologies Used

Node.js: Runtime environment for executing JavaScript on the server.

Express.js: Web framework for building REST APIs.

MongoDB: NoSQL database for storing user and fitness-related data.

Mongoose: ODM (Object Data Modeling) library for MongoDB.

JWT: Authentication using JSON Web Tokens for secure access.

DigitalOcean: Cloud provider for hosting the backend.

MongoDB Atlas: Cloud-hosted MongoDB database.

- Installation

Clone the Repository:

git clone https://github.com/AramisB/health-fitness-tracker-backend.git

cd health-fitness-tracker-backend

Install Dependencies:

npm install

Set Up Environment Variables: Create a .env file in the root directory and add the following:

MONGO_URI=your_mongo_atlas_connection_string

PORT=5000

JWT_SECRET=your_jwt_secret

Run the Backend Server:

npm start

- Access the API:

The server will run on http://localhost:5000.

- API Endpoints

/api/register - Register a new user

/api/login - User login and token generation

/api/exercise - Log an exercise (Authenticated route)

/api/goals - Set and manage fitness goals (Authenticated route)

/api/progress - View progress over time (Authenticated route)

- Deployment

The backend is deployed using DigitalOcean. You can access the live API at:

https://seal-app-buzkz.ondigitalocean.app/api