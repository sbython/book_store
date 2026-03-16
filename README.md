# MERN Book Store

A full-stack book store application built with the MERN stack (MongoDB, Express, React, Node.js) and Dockerized for easy setup and deployment. The frontend features a responsive, Pinterest-style card layout built with React.

## Features
- **Frontend**: React application with a dynamic, Pinterest-style masonry card layout. Includes interactive Book cards with Add, Edit, and Delete actions.
- **Backend**: Express REST API built on Node.js.
- **Database**: MongoDB for storing book details (title, author, publish year, cover image URL, etc.).
- **Docker**: Containerized environments using `docker-compose` to run the frontend, backend, and database together seamlessly with hot-reloading for development.

## Project Structure
- `/frontend`: React frontend application.
- `/backend`: Node.js/Express backend application.
- `docker-compose.yml`: Docker Compose configuration for local development.

## Prerequisites
- Docker and Docker Compose installed on your system.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd book_store
   ```

2. **Start the application with Docker:**
   You can start the full stack (frontend, backend, database) using Docker Compose:
   ```bash
   docker-compose up --build
   ```

   *Alternatively, if `make` is installed and a corresponding Makefile target exists:*
   ```bash
   make dev  # or your preferred start command
   ```

3. **Access the application:**
   - **Frontend**: Typically available at [http://localhost:5173](http://localhost:5173) or [http://localhost:3000](http://localhost:3000) depending on Vite/CRA setup.
   - **Backend API**: Typically available at [http://localhost:5555](http://localhost:5555) (or the port specified in docker-compose).

## Development
- Changes to the frontend or backend code will automatically reflect via hot-reloading provided by the Docker setup.
- To shut down the containers, run:
  ```bash
  docker-compose down
  ```

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- Vite (assumed for frontend build/hot-reloading)
- Docker / Docker Compose
- Vanilla CSS for styling
