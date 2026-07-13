# Deployment Guide

This file describes how the AI Test Case Generator can be deployed online.

The project has two parts:

- Frontend: static web app in the web-app folder
- Backend: Node.js Express API in the backend folder

## Backend Deployment

The backend should be deployed as a Node.js web service.

Possible platforms:

- Render
- Railway
- Fly.io
- Other Node.js hosting providers

## Backend Settings

Backend folder:

    backend

Local start command:

    npm.cmd start

Online deployment start command:

    npm start

Required environment variables:

    OPENAI_API_KEY=your_openai_api_key_here
    PORT=3000

The real API key must be added in the hosting provider dashboard.

Do not commit the real API key to GitHub.

## Backend Health Check

The backend includes a health check endpoint:

    /health

Example local URL:

    localhost:3000/health

Expected response example:

    {
      "status": "ok",
      "service": "AI Test Case Generator backend",
      "timestamp": "2026-07-13T08:00:00.000Z"
    }

## Frontend Deployment

The frontend is a static web app.

Frontend folder:

    web-app

Possible platforms:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

## Frontend API URL

For local development, the frontend uses:

    http://localhost:3000

For deployment, update the API base URL in:

    web-app/script.js

Example:

    const API_BASE_URL = "https://your-backend-url.com";

A reference example is available in:

    web-app/config.example.js

## Local Development

Start backend:

    cd backend
    npm.cmd start

Open frontend:

    web-app/index.html

## Deployment Notes

- Do not commit .env.
- Do not expose the OpenAI API key in frontend JavaScript.
- Keep the OpenAI API key only in backend environment variables.
- Make sure CORS is enabled for frontend requests.
- Test /health after backend deployment.
- Test /generate after frontend and backend are connected.

## Future Deployment Improvements

- Add production-specific CORS configuration.
- Add deployed backend URL to frontend config.
- Add live demo link to README.md.
- Add screenshots of the deployed app.
