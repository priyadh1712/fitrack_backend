# FitTrack Backend API

## Project Overview

This is the backend for fitness tracking application. The platform allows users to manage their fitness data, track progress, and securely store information through RESTful APIs. Built with **Node.js**, **Express.js**, and **MongoDB**, this backend ensures scalability, performance, and security for modern fitness applications.

---

## Key Features

1. *User Authentication*
2. *Profile Management*
3. *Fitness Data Tracking*
4. *Secure API Design*
5. *Postman Integration*

---

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (NoSQL Database)
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt
- **Environment Management**: dotenv
- **Visual Charts**: chartjs

---

## Architecture

The backend is designed as a RESTful API, following a modular and layered architecture:
1. **Routes**: Define API endpoints.
2. **Controllers**: Handle the business logic.
3. **Models**: Define MongoDB schemas and interact with the database.
4. **Middleware**: Provide authentication and input validation.

---

## API Endpoints

Below are some key API endpoints provided by the backend:

### User Authentication
- `POST /auth/signup`: Register a new user.
- `POST /auth/login`: Login with email and password.

### Profile Management
- `GET /user/profile`: Fetch user profile details.
- `PUT /user/profile`: Update user profile information.

### Fitness Data
- `POST /fitness`: Add a new fitness record.
- `GET /fitness`: Retrieve all fitness data for the logged-in user.
- `PUT /fitness/:id`: Update a specific fitness record.
- `DELETE /fitness/:id`: Delete a specific fitness record.

---

## Working

1. **User Registration**:
   - New users register by providing details like email and password.
   - Passwords are securely hashed before being stored in the database.

2. **User Login**:
   - Users log in with their credentials to receive a JSON Web Token (JWT).
   - This token is used to authenticate subsequent requests.

3. **Data Management**:
   - Users can log and manage their fitness-related data.
   - The data is stored in MongoDB for quick retrieval and analysis.

4. **Secure Access**:
   - Middleware ensures only authenticated users can access protected routes.
   - JWT tokens are verified before processing requests.

---

## Deployment

The backend is deployed and accessible at:
- **Base URL**: [https://fitrack-backend.onrender.com](https://fitrack-backend.onrender.com)

Frontend:
- **Deployed Frontend**: [https://fitrack-mern.netlify.app](https://fitrack-mern.netlify.app)

You can test the APIs using the provided Postman collection:
- **Postman Collection**: [Fitrack-API-Testing.postman_collection.json](Fitrack-API-Testing.postman_collection.json)

