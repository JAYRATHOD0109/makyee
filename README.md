# Next.js TypeScript Project

A modern web application built with Next.js and TypeScript, following industry best practices for code quality and commit standards.

## Tech Stack

This project uses the following technologies:

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on git staged files
- **[commitlint](https://commitlint.js.org/)** - Lint commit messages

## Getting Started

### Prerequisites

- Node.js (version 18.x or higher)
- npm or yarn or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

> **Important**: The `prepare` script will automatically set up Husky git hooks during installation. If you're working in a fresh clone and Husky hooks aren't working, run `npm run prepare` manually to install them.

2. Start the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run prepare` - Set up Husky git hooks (runs automatically after npm install)
