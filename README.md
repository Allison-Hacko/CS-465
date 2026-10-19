# Travlr Getaways

A full-stack travel application built with Node.js, Express, Handlebars, Angular, and MongoDB. The project combines a server-rendered travel website, a REST API, and an Angular administrative single-page application.

## Overview

Travlr Getaways demonstrates how a frontend, backend, API, and database work together in a full-stack web application. Express handles server requests and API routes, Handlebars renders server-side pages, Angular provides the administrative interface, and MongoDB stores trip information.

## Features

- Server-rendered pages using Express and Handlebars.
- Client-side JavaScript for browser interactions.
- REST API endpoints for retrieving, creating, and updating trip records.
- MongoDB database integration using Mongoose.
- Angular administrative single-page application.
- JWT-based authentication for protected administrative functionality.
- Postman collection for testing API requests.

## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend JavaScript runtime |
| Express | Web server and API routing |
| Handlebars | Server-side page templates |
| JavaScript | Application behavior and browser interactions |
| Angular | Administrative single-page application |
| MongoDB | Database |
| Mongoose | Database modeling and access |
| JSON Web Tokens (JWT) | Authentication |
| Postman | API testing |

## Project Structure

- `app_admin/` - Angular administrative application.
- `bin/` - Backend server startup configuration.
- `routes/` - Backend route definitions.
- `app.js` - Express application configuration.
- `package.json` - Backend dependencies and scripts.
- `app_admin/package.json` - Angular dependencies and scripts.
- `.env.example` - Template for local environment variables.
- `Travlr_API_Tests.postman_collection.json` - Postman API test collection.
- `travlr.zip` - Packaged project artifact.

## Prerequisites

Install the following software:

- [Node.js and npm](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/) for running the included API requests

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Allison-Hacko/CS-465.git
cd CS-465
```

### 2. Configure environment variables

Create a local `.env` file from the example:

```powershell
Copy-Item .env.example .env
```

Edit `.env` and replace the placeholder JWT secret with a long, randomly generated secret.

```dotenv
JWT_SECRET=your-long-random-secret
DB_HOST=127.0.0.1
```

Keep your actual `.env` file private. Do not commit real secrets or credentials to GitHub.

### 3. Start MongoDB

Make sure your local MongoDB server is running. The application uses the `travlr` database.

### 4. Install dependencies and start the backend

From the repository root, run:

```bash
npm ci
npm start
```

The backend is expected to run at `http://localhost:3000`.

### 5. Start the Angular administration application

Open a second terminal:

```bash
cd app_admin
npm ci
npm start
```

The Angular development server is expected to run at `http://localhost:4200`.

Keep both servers running while testing the application.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/trips` | Retrieve the trip collection |
| POST | `/api/trips` | Create a trip record |
| GET | `/api/trips/:tripCode` | Retrieve a trip by its code |
| PUT | `/api/trips/:tripCode` | Update a trip by its code |

Replace `:tripCode` with the code of the trip you want to retrieve or update.

The API uses JSON to exchange structured trip data. Protected administrative requests must meet the application's JWT authentication requirements.

## API Testing

The repository includes `Travlr_API_Tests.postman_collection.json`, which can be imported into Postman.

Recommended testing workflow:

1. Start MongoDB and the backend server.
2. Import the Postman collection.
3. Send a GET request to `/api/trips` and inspect the returned trip data.
4. Send a GET request to `/api/trips/:tripCode` to test retrieving an individual trip.
5. Use POST with a new test record to test trip creation.
6. Use PUT to update that test record and verify the changes.
7. Test protected endpoints with valid authentication and check how unauthorized requests are handled.
8. Open the Angular application in a browser and test its administrative functionality.

Use test records when testing create and update operations so important data is not accidentally changed.

## Security and Configuration

- Store secrets in environment variables rather than hardcoding them.
- Use a strong, private JWT secret.
- Do not commit `.env` files containing real credentials.
- Provide valid authentication for protected operations.
- Use `npm ci` to install dependencies from the project's lockfiles.

## Development Notes and Course Competencies

### Architecture

The application combines server-rendered pages, client-side JavaScript, a REST API, an Angular administrative interface, and a MongoDB database. Express manages server requests and routing, Handlebars renders pages, and Mongoose provides database access. Angular supports a separate single-page administrative experience.

Separating these responsibilities makes the application easier to organize, maintain, and troubleshoot. Each layer has a defined role while relying on the others to deliver the complete application.

### Functionality

JSON is a text-based format for exchanging structured data, while JavaScript is a programming language used to implement application behavior. The API uses JSON to transfer trip information between the frontend and backend.

The API uses GET to retrieve data, POST to create records, and PUT to update existing records. The Angular application communicates with backend services through HTTP requests. Organizing functionality into reusable components and distinct responsibilities helps reduce duplication and makes future changes easier to manage.

### Testing

The Postman collection allows API requests to be tested independently of the user interface. GET requests can verify retrieval, while POST and PUT requests can verify record creation and updates. Testing individual endpoints helps distinguish backend problems from frontend issues.

Authentication also needs to be tested because protected administrative operations should not be available to unauthorized users. Environment variables and database connectivity must be configured correctly before the application can be tested reliably.

### Reflection

Developing this application provided practical experience connecting frontend interfaces, backend routes, authentication, and database operations. It reinforced the importance of testing individual parts of a full-stack application rather than assuming that a working page means the entire system works correctly.

The project demonstrates skills in web development, API design, database integration, debugging, and technical documentation. These skills provide a foundation for building and maintaining larger applications.

## Author

Allison Hacko

[GitHub Repository](https://github.com/Allison-Hacko/CS-465)
