# Github Searched App

The GitHub Finder project is a React-based application designed to search for GitHub profiles and display detailed information about users and their repositories. The app uses the [GitHub API](https://api.github.com) to fetch data and presents it in an organized and user-friendly manner.

## key Features

1. **Search Functionality:**
   - Users can search for GitHub profiles by entering a username in the search bar.
   - Displays a list of matching users with profile pictures and usernames.

2. **User Profile:**
   - Detailed view of a selected user's profile, including:
      - Name, avatar, location, and bio.
      - Links to the user's GitHub profile and website.
      - Statistics such as followers, following, public repositories, and gists.

3. **Repository List:**
   - Displays the user's latest repositories.
   - Shows key metrics for each repository. (e.g. stars, forks, and watchers)

4. **Error Handling:**
   - Alerts for search errors, such as entering an empty search query.
   - A 404 Not Found page for invalid user profiles.

5. **Responsive Design:**
   - Ensures the application is mobile-friendly and adapts to various screen sizes using Tailwind CSS.

## Key Technologies and Tools

- **React and TypeScript:** Leveraged for building scalable and type-safe components.

- **React Router:** Provides seamless navigation between different views.

- **Axios:** Used for making HTTP requests to the GitHub API with proper authentication.

- **Hooks:**
  - `useState`: Manages component state for search queries, user data, and loading states.
  - `useEffect`: Fetches data from the GitHub API when the search query changes.
  - `useReducer`: Manages global state for users, repositories, and loading status.
  - `Custom Hooks`: Created to share functionality between components. Custom hooks are a way to reuse code logic between multiple components. In this project, the custom hooks handle state variables and effects needed to fetch user profiles from the GitHub API, making the components more modular and easier to manage at `useGithub.ts` and `useAlert.ts`

- **Tailwind CSS:** Ensures the application is responsive and visually appealing.

- **DaisyUI:** A Tailwind CSS component library for building beautiful and responsive user interfaces.

## Deploy in Vercel
- [Github-search](https://github-app-wheat.vercel.app/)

This project effectively employs modern web development technologies to provide a user-friendly experience for searching GitHub profiles.
