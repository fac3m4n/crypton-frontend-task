# Crypton Frontend Task

A modern authentication application built with React, TypeScript, and Vite, featuring a clean UI with dark mode support.

## Features

- 🔐 User Authentication (Login/Register)
- 👤 Protected Profile Page
- 🌓 Dark/Light Theme Toggle
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- ✨ Form Validation with Zod
- 🚀 Type-Safe Development with TypeScript

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **HTTP Client:** Axios
- **State Management:** TanStack Query
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Toast Notifications:** Sonner

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/fac3m4n/crypton-frontend-task
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`

### Build

To create a production build:

```bash
pnpm run build
```

## Project Structure

src/
├── api/ # API configuration and instances
├── components/ # Reusable components
│ ├── ui/ # UI components
│ └── layouts/ # Layout components
├── lib/ # Utility functions
├── pages/ # Page components
└── types/ # TypeScript type definitions

## Features in Detail

### Authentication

- User registration with email and password
- Login with existing credentials
- Protected routes requiring authentication
- Automatic redirect to login for unauthenticated users

### Theme Support

- Light and dark mode support
- Theme persistence using localStorage
- System theme detection
- Smooth theme transitions

### Form Handling

- Type-safe form validation using Zod
- Real-time error feedback
- Loading states during form submission
- Toast notifications for success/error states

## Environment Variables

The application uses the following environment variables:

- `VITE_API_URL`: The URL of the backend API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
