# Codingal Live Class Checklist

This is an audit-proof guide and checklist application for Codingal Plus classes, built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Live Checklist**: Interactive checklist for class preparation and execution.
- **Rubric Breakdown**: Detailed breakdown of audit scoring.
- **Teaching Script**: Step-by-step script for different class segments.
- **Pre/Post Class Tabs**: Dedicated lists for preparation and post-class tasks.
- **Risk Mitigation**: Highlights high-risk areas to avoid marks deduction.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 18+ recommended).
- **npm**: Comes with Node.js.

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install React, Vite, Tailwind CSS, and other necessary packages.

### 2. Run Development Server

To start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.
The server supports Hot Module Replacement (HMR), so changes to files will instantly reflect in the browser.

### 3. Build for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

### 4. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # React components
│   ├── tabs/           # Tab-specific content components
│   └── ChecklistSection.tsx
├── data/              # Static data (checklists, rubrics)
├── types/             # TypeScript interfaces
├── App.tsx            # Main application entry
└── main.tsx           # React DOM root
```

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS 4**
- **Lucide React** (Icons)
