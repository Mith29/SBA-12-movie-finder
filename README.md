# Movie Finder API

## Overview

The **Movie Finder API** is a backend service built with **Node.js and Express** that retrieves movie data from the **OMDb (Open Movie Database) API**.

This API acts as an **intermediary between a client application and the external OMDb service**, returning only the relevant and cleaned movie data needed by the front-end.

The API follows **RESTful principles**, uses **Axios for external requests**, and keeps sensitive configuration such as API keys secure using **environment variables**.

---

# Features

* Search movies by title
* Retrieve detailed movie information by IMDb ID
* Fetch data from the OMDb external API
* Clean and transform movie data before sending it to the client
* Secure API key storage using `.env`
* Error handling for API and network failures
* Request and response logging using Axios interceptors

---

# Technologies Used

* Node.js
* Express.js
* Axios
* dotenv

---

# Project Structure

```
movie-finder-api
│
├── controllers
│   └── movieController.js
│
├── routes
│   └── movieRoutes.js
│
├── server.js
├── .env
├── .gitignore
└── package.json
```

---

# Installation

### 1. Clone the repository

```
git clone https://github.com/yourusername/movie-finder-api.git
```

### 2. Navigate to the project folder

```
cd movie-finder-api
```

### 3. Install dependencies

```
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory and add your OMDb API key:

```
OMDB_API_KEY=your_api_key_here
```

You can get a free API key from:

http://www.omdbapi.com/apikey.aspx

---

# Running the Server

Start the server with:

```
node server.js
```

The server will run on:

```
http://localhost:3001
```

---

# API Endpoints

## 1. Search Movies

Search movies by title.

### Request

```
GET /api/search?title=batman
```

### Example

```
http://localhost:3001/api/search?title=batman
```

### Response

```
[
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Type": "movie"
  },
  {
    "Title": "Batman",
    "Year": "1989",
    "Type": "movie"
  }
]
```

### Error Response

```
{
  "error": "Title query parameter is required!"
}
```

---

# 2. Get Movie Details

Retrieve detailed information for a specific movie using its **IMDb ID**.

### Request

```
GET /api/movies/:id
```

### Example

```
http://localhost:3001/api/movies/tt0372784
```

### Response

```
{
  "Title": "Batman Begins",
  "Year": "2005",
  "Genre": "Action, Crime, Drama",
  "Director": "Christopher Nolan",
  "Actors": "Christian Bale, Michael Caine, Liam Neeson"
}
```

---

# Error Handling

The API includes error handling for:

### External API Errors

If the OMDb API returns an error, the server returns:

```
{
  "message": "Error fetching data from external API."
}
```

### Network Errors

If the request fails due to connectivity issues:

```
{
  "message": "A network error occurred."
}
```

---

# Axios Interceptors

The API uses Axios interceptors to log requests and responses.

### Request Interceptor

Logs outgoing API requests.

```
Requesting: GET /?s=batman
```

### Response Interceptor

Logs successful responses or errors when fetching movie data.

---

# RESTful Principles Used

This API follows key REST principles:

### Client–Server Architecture

The backend API is independent from the client application.

### Statelessness

Each request contains all the required information. The server does not store client session state.

### Resource-Based URLs

Endpoints represent resources rather than actions.

Examples:

```
/api/search
/api/movies/:id
```

### Standard HTTP Methods

This API uses the **GET** method to retrieve data.

---

# Author

Junior Backend Developer Project

Movie Finder API – Backend Assessment
