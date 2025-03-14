# Project: Events manager

## Description
The Events Manager is a web application designed to help users manage and keep track of various events. It allows users to view event details, sign up, sign in, and create new events. The application interacts with a RESTful API to fetch and manage event data.

### Key Features

- **Home Page**: 
    - Displays a list of events in a card format.
    - Clicking on an event card navigates to the event details page.

- **Event Details Page**: 
    - Shows detailed information about a specific event based on the event ID in the URL.

- **Sign Up Page**: 
    - Provides a registration form for new users.
    - Submits a POST request to the registration endpoint.
    - Redirects to the sign-in page upon successful registration.

- **Sign In Page**: 
    - Similar to the sign-up page but for existing users to log in.

- **Create Event Page**: 
    - Accessible only to logged-in users.
    - Contains a form for creating new events.
    - Requires an API token to create an event.

This application ensures a seamless user experience by integrating modern web technologies and following best practices in web development.


## Instructions on how to install and run this application:
1. **API Setup**: Ensure the Events API is running on your local machine. Head over to this repo: [events-api](https://github.com/WebDev-WBSCodingSchool/events-api), follow the instructions for installing and running the app. You should have a working API running on your computer. The API is fully documented and you can even try some endpoints in the live documentation powered by Swagger UI. 
2. **Clone the Repository**: Clone this repository to your local machine using `git clone <repository-url>`.
3. **Install Dependencies**: Navigate to the project directory and run `npm install` to install all necessary dependencies.
4. **Run the Application**: Start the application by running `npm start`. The application should now be running on `http://localhost:3000`.
5. **Environment Variables**: Create a `.env` file in the root of the project and add the necessary environment variables, such as the API base URL.
6. **Access the Application**: Open your browser and navigate to `http://localhost:3000` to start using the Events Manager application.

## Technologies Used
- React
- Redux
- Axios
- React Router
- Tailwind CSS
- Node.js
- Express
- MongoDB
- Swagger UI


