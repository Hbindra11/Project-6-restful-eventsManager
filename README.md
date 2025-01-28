
# Project: The Event scheduler
This project is designed to enhance your skills in React by building an application that interacts with real data via a RESTful API. Until now, we’ve only stored data in the browser using localStorage or relied on existing data from APIs like the Pokemon API or the Movie DB. However, in a real application, we will need to persist some data, which will ultimately live inside a database. For now, it should suffice to know that some APIs expose endpoints or methods to create, read, update, or delete data, collectively known as CRUD. These actions map to the POST, GET, PUT, and DELETE HTTP request methods!

## Features:
⚠️ API: Head over to this repo, follow the instructions for installing and running the app. You should have a working API running on your computer. The API is fully documented and you can even try some endpoints in the live documentation powered by Swagger UI. You’ll eventually learn how to create your very own RESTful APIs in the meantime, we got this.
- Home Page:
Display a list of events as cards.
Clicking on a card should take you to the event details page.
Event Details Page:
Render the details of a particular event based on the ID in the URL.
- Sign Up Page:
Render a form for signing up.
On submission, send a POST request to the register endpoint.
If everything goes alright, redirect the user to the sign in page! 😀
- Sign In Page:
Similar to the Sign Up page but for existing users.
- Create Event Page:
Nested under a route with a protected layout.
Display a form to create an event.
Cannot be visited if the user is not logged in.
Cannot create an event without the API token.
