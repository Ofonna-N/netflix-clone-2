# Flixclone
Welcome to the Netflix Clone project! This is a demo application created to explore and demonstrate the capabilities of React Router 7 along with other modern web technologies.
This project represents an ongoing effort to research and implement a migration from Create React App to React Router 7, showcasing its potential as a modern, production-ready template for building full-stack React applications.

[Demo](https://netflix-clone-2-five.vercel.app/)

![image](https://github.com/user-attachments/assets/a148f65e-9393-462f-9de2-7d5cb56da870)


## Features

- **React Router 7**: Fully integrated to handle client-side routing with nested routes.

- **TypeScript**: Strongly typed codebase for better scalability and maintainability.

- **TanStack Query**: Advanced state management and server-state synchronization for seamless data handling.

- **Material-UI & Emotion**: For clean and professional UI design.

- **Tailwind CSS**: Utility-first CSS for rapid styling.

- **Framer Motion**: Smooth and engaging animations to enhance user experience.

- **Vite**: Lightning-fast bundler for optimized development and build workflows.

- **Responsive Design**: Looks great on any device, from desktops to smartphones.

- **Swiper.js**: Interactive and touch-friendly carousels for showcasing content.

## Tech Stack 🛠️
### Frameworks & Libraries
- React 19
- React Router 7
- Material-UI
- Framer Motion
- Swiper.js

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```
