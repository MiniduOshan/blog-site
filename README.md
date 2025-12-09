# 📖 Blog Site Application

## 🌟 Introduction

Welcome to the repository for the **Blog Site** application\!

This project is a comprehensive platform for sharing articles and ideas, featuring a **Single Page Application (SPA)** frontend and a dedicated API backend. The repository is structured as a **monorepo**, ensuring high performance and maintainability across both services.

### 🚀 Key Technologies

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React (Vite)** | High-performance client-side SPA with `react-router-dom`. |
| **Styling** | **Tailwind CSS** | Utility-first styling for rapid and responsive development. |
| **Backend** | **Node.js / Express** | API services for handling data persistence and blog management. |
| **Containerization** | **Docker** | Used for isolated local development and environment consistency. |
| **CI/CD** | **GitHub Actions** | Automated workflow for building and deploying the frontend. |
| **Hosting** | **GitHub Pages** | Static site hosting for the frontend application. |

-----

## 📂 Repository Structure

The project is organized into two primary service directories. Note the placement of the Dockerfiles and the CI/CD workflow:

```
.
├── .github/workflows/         # Contains the 'deploy.yml' CI/CD workflow
├── backend/                   # Node/Express API service
│   ├── models/                # Database schemas (e.g., Blog.js)
│   ├── routes/                # API endpoints (e.g., blogRoutes.js)
│   ├── server.js              # Main backend entry point
│   └── Dockerfile             # Docker setup for the backend
└── frontend/                  # Vite React Single Page Application (SPA)
    ├── src/                   # Main source code
    │   ├── components/
    │   ├── pages/
    │   └── App.jsx            # Main router configuration
    └── Dockerfile             # Docker setup for the frontend
```

-----

## 💻 Local Setup and Development

### 1\. Prerequisites

You must have the following tools installed:

  * **Node.js** (LTS version)
  * **npm** (Node Package Manager)
  * **Docker** and **Docker Compose**

### 2\. Running Frontend Locally (NPM)

To run the frontend development server for hot-reloading and active development:

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# The application will be available at http://localhost:5173/ (as seen in your image)
```

### 3\. Running Frontend with Docker

To build the optimized production image and serve it using the `frontend/Dockerfile`:

```bash
# Ensure you are in the repository root directory
# 1. Build the frontend image
docker build -t blog-frontend ./frontend

# 2. Run the container, mapping host port 3000 to container port 80
docker run -p 3000:80 blog-frontend

# The production build will be available at http://localhost:3000
```

-----

## 🌐 Continuous Deployment (CD)

The frontend is built and deployed to your GitHub Pages URL automatically.

### 1\. Deployment Workflow

The deployment logic is contained in **`.github/workflows/deploy.yml`**.

  * **Isolation:** The workflow specifically isolates the **`frontend/`** directory to install dependencies and run the build command (`npm run build -- --base /<REPO_NAME>/`).
  * **Trigger:** Deployment runs on every `push` to the **`main`** branch.
  * **Target:** The compiled static assets are pushed to the **`gh-pages`** branch, which serves your live site.

### 2\. Live Site

After a successful deployment, the frontend application is accessible at:

`https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`
