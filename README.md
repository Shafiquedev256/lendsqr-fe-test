# Lendsqr Frontend Engineer Assessment

## Project Overview

This project is a frontend web application built as part of the Lendsqr Frontend Engineer Assessment. The application includes the following pages:

- **Login Page**
- **Dashboard**
- **User Page**
- **User Details Page**

The application is built using:

- **React** (for the UI framework)
- **TypeScript** (for type safety and maintainability)
- **Tailwind CSS** (for styling and responsiveness)

## Features Implemented

- **Pixel-perfect design** following the provided Figma design.
- **Mock API** with 500 records to fetch and display user data.
- **Local Storage/IndexedDB** for storing and retrieving user details.
- **Mobile responsiveness** to ensure a seamless experience across different screen sizes.
- **Unit testing** to cover positive and negative test cases.

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm or yarn

### Steps to Run Locally

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Deployment

The application has been deployed to **Vercel** and is accessible via the following URL:

-

## Project Structure

```
├── src
│   ├── components   # Reusable components
│   ├── pages        # Application pages
│   └── App.tsx      # Main application entry point
├── public           # Public assets
├── tests            # Unit and integration tests
├── .eslintrc        # Linting configuration
├── .prettierrc      # Code formatting configuration
├── tsconfig.json    # TypeScript configuration
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## Testing

This project includes unit tests to ensure functionality. Run the tests using:

```sh
npm test  # or yarn test
```

## Code Snippets

### Fetching Data from Mock API

```tsx
import { useEffect, useState } from "react";

const fetchUsers = async () => {
  const response = await fetch("https://mock-api-url.com/users");
  return response.json();
};

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
```

### Using Local Storage

```tsx
const saveToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
```

## Decisions & Justifications

- **Tailwind CSS over SCSS**: Tailwind CSS was chosen over SCSS for rapid development and easy utility-based styling.
- **React Query**: Used for efficient data fetching and caching.
- **Vercel for deployment**: Chosen for its seamless integration with React projects and quick deployments.

## Resources

- [Figma Design](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/FrontendTesting?node-id=5530%3A0)
- [json-generator](https://json-generator.com/)

## Submission Details

- **GitHub Repository**: [Lendsqr FE Test Repo](https://github.com/your-username/lendsqr-fe-test)
- **Deployment Link**: [Live App](https://your-name-lendsqr-fe-test.vercel.app)
- **Documentation Link**: [Google Docs Review](https://docs.google.com/your-document-link)

## Contact

For any questions or clarifications, feel free to reach out via email at `your-email@example.com`.
