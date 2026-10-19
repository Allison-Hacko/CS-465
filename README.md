# CS-465 Travlr Getaways

## Project Setup

### Prerequisites
- Node.js and npm
- MongoDB running locally, or an accessible MongoDB server

### Configure the environment
1. Copy `.env.example` to `.env` in the project root.
2. Replace the placeholder `JWT_SECRET` with a long, random secret.
3. Set `DB_HOST` to your MongoDB host. For a local database, use `127.0.0.1`.
4. Keep `.env` private. Never commit or share your real secret.

The application uses the `travlr` MongoDB database.

### Start the backend
From the project root, run:

```powershell
npm ci
npm start
```

The backend normally runs at `http://localhost:3000`.

### Start the Angular admin application
Open a second terminal and run:

```powershell
Set-Location app_admin
npm ci
npm start
```

The Angular development server normally runs at `http://localhost:4200`.

### Setup notes
- Configure the environment before starting the backend. The API requires `JWT_SECRET` for JWT authentication.
- Ensure MongoDB is running before using database-backed features.
- The `.env.example` file contains placeholders only, not production credentials.

---

# Module Eight Journal: Travlr Full-Stack Application

## Architecture

The Travlr project helped me understand how the different parts of a full-stack application work together. The Express application uses server-side rendering with Handlebars to generate pages, while JavaScript adds interactive behavior in the browser. The Angular admin application takes a different approach by working as a single-page application (SPA). Instead of loading an entirely new page for each interaction, Angular can update parts of the interface as users work with the application.

These approaches serve different purposes. Server-side rendering works well for delivering complete pages, while a SPA can make an administrative interface feel more responsive and organized. Using an API between the frontend and backend also helps separate the user interface from the data and application logic.

I used MongoDB for the database because its document-based structure works well with the trip data used in the project. With Mongoose, I could define models and work with database records through the application. A relational database would also be a valid choice for many applications, especially when strict relationships between tables are important. For this project, MongoDB fit the document-oriented data structure and the technologies used throughout the application.

## Functionality

One important distinction I learned is that JSON and JavaScript are not the same thing. JavaScript is a programming language used to build application behavior, while JSON is a text format for representing and exchanging structured data. The frontend can send a request to the Express API, receive trip information in JSON format, and use JavaScript or Angular to display that information.

For example, the trips API supports retrieving trip data through GET requests and creating or updating records through POST and PUT requests. This gives the frontend a consistent way to communicate with the backend without needing to know how the database stores each record internally.

Refactoring also helped me see the value of separating responsibilities. Keeping database models, routes, and application logic in separate areas makes the code easier to follow and maintain. Reusable Angular components provide a similar benefit on the frontend. Rather than rebuilding the same interface elements in several places, components can be reused and updated in one place. This reduces duplicated code and makes future changes easier to manage.

## Testing

Testing the API helped me understand how HTTP methods support different operations. GET requests retrieve information, POST requests create records, and PUT requests update existing records. The trips API includes routes such as `/api/trips` and `/api/trips/:tripCode`, which allow the application to retrieve and manage trip data.

API testing is useful because it lets me check whether the backend behaves correctly independently of the user interface. A request can succeed or fail for reasons that are easier to identify when the API response is inspected directly. The Postman collection included with this project provides a way to organize and repeat API tests.

Security was another important part of the project. Routes that change data should not be available to every request without appropriate checks. JSON Web Token (JWT) authentication helps the backend verify a user's authorization before allowing protected operations. Testing unauthorized requests is important because an API should reject requests that do not provide valid authentication. Environment variables also help keep secrets separate from the application source code. The real `.env` file should remain private and must not be committed to the repository.

## Reflection

Working on Travlr gave me a better understanding of how a full-stack application fits together. I had to think about the frontend, backend, database, API requests, and security instead of treating each part as an isolated assignment. I also learned that getting a feature to work is only part of the process. The code still needs to be understandable, testable, and maintainable.

Some of the most useful skills I practiced were debugging, organizing code, working with MongoDB and Mongoose, building API routes, using Angular, and testing requests. I also became more comfortable investigating problems rather than assuming that the first solution would be the right one. When something did not work as expected, I had to narrow down where the problem was happening and check how the different parts of the application interacted.

These skills are useful for my career goals in computer science because employers need developers who can do more than write code that works once. They need people who can understand an existing project, improve it, test their changes, and explain their decisions. Travlr gave me practical experience with those responsibilities, and documenting the project helps me communicate what I learned and show the work I completed.