# STEM LLM Assessment Platform

## Project Overview

**Description**: Professional assessment platform for evaluating large language model performance in STEM education

**Technology Stack**: React, TypeScript, Tailwind CSS, Vite

## Development Setup

### Prerequisites

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Getting Started

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd stem-llm-assessment-platform

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

### Project Structure

```
stem-llm-assessment-platform/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Application pages
│   ├── assets/             # Static assets
│   └── lib/                # Utility functions
├── public/                 # Public assets
└── package.json
```

## Features

- **Student Simulation**: Create authentic learning scenarios for ages 13-24
- **Rubric Builder**: Design objective evaluation criteria with atomic measurements
- **STEM Focus**: Mathematics, Physics, and Chemistry assessment templates
- **Professional UI**: Clean, responsive design optimized for educational use

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and building
- **UI Components**: Custom component library with shadcn/ui
- **State Management**: React Query for server state management
- **Routing**: React Router for navigation

## Deployment

The application can be deployed to any modern hosting platform that supports static sites:

- Vercel
- Netlify  
- AWS S3 + CloudFront
- GitHub Pages
