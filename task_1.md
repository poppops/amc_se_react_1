📘 Assignment: Build a Simple User Directory Application
🧩 Objective
Create a full-stack user directory application that allows users to:

Register themselves into a directory.

Login to access the application.

View a listings page showing all registered users.

Click on a user to view detailed information about them.

This assignment covers both frontend UI development and backend API creation.

✅ Core Features
1. User Registration
Users should be able to sign up with basic information (e.g., name, email, password).

On successful registration, users should be redirected to the login page or logged in automatically.

2. User Login
Authenticated users should be able to log in and maintain their session.

Unauthorized users should not be able to access protected routes (e.g., the listings page).

3. User Listings Page
A page that displays all registered users (excluding the currently logged-in user).

Each user entry should include summary information (e.g., name and profile picture).

Clicking on a user should navigate to a User Details page.

4. User Details Page
Shows more detailed information about the selected user.

Should be accessible only when the user is logged in.

🔧 API Requirements
You will need to build the necessary backend endpoints to power the frontend. The following endpoints are expected (but not necessarily exhaustive):

Method	Endpoint	Description
POST	/api/register	Create a new user
POST	/api/login	Authenticate a user and start session
GET	/api/users	Retrieve list of all users
GET	/api/users/:id	Get details of a specific user

You may include additional endpoints as needed (e.g., logout, session check, etc.).

🎨 UI/UX Expectations
Design a clean and professional interface for the application.

Create a logo and consistent visual theme across all pages.

Ensure there is navigational continuity, allowing users to move between:

Login

Registration

Listings

User Details

The app should be mobile-friendly or at least visually coherent on smaller screens.

📦 Deliverables
Source code for both frontend and backend

Instructions on how to run the app locally

A brief write-up (optional) of design decisions and implementation choices

