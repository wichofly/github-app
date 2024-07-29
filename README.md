# Github Searched App

This repository contains a GitHub-App that leverages the [GitHub API](https://api.github.com) to search for and obtain the profile of the desired user. By making a request to the following endpoint, the app retrieves user information:


## Technologies Used

- **Tailwind CSS**
  - Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. It provides a set of classes that can be directly applied to HTML elements, enabling the creation of responsive and modern web designs without writing custom CSS.

- **DaisyUI**
  - DaisyUI is a Tailwind CSS component library that simplifies the process of building user interfaces. It offers a collection of pre-designed, fully responsive components that can be easily customized using Tailwind's utility classes. DaisyUI helps developers quickly assemble beautiful and consistent UIs.

- **Custom Hooks**
  - Custom hooks have been created to share functionality between components. Custom hooks are a way to reuse code logic between multiple components. By encapsulating logic in a custom hook, we can create reusable pieces of code that can be shared across components without duplicating the code. Custom hooks can be used to handle common tasks, such as fetching data, and can help to make our code more organized and easier to maintain.

  - In this project, the custom hooks handle state variables and effects needed to fetch user profiles from the GitHub API, making the components more modular and easier to manage at `useGithub.ts` and `useAlert.ts`

## Deploy in Vercel
- [Github-app](https://github-app-wheat.vercel.app/)

This project effectively employs modern web development technologies to provide a user-friendly experience for searching GitHub profiles.
