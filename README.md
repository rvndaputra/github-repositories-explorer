# GitHub User Search

GitHub User Search is a React application that allows users to search for GitHub users and view their repositories.

## Table of Contents

- [GitHub User Search](#github-user-search)
  - [Table of Contents](#table-of-contents)
  - [Project Description](#project-description)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)

## Project Description

GitHub User Search is a web application that utilizes the GitHub API to search for users based on their usernames. It provides an intuitive user interface for searching and displaying user information, including their avatar, username, and a list of repositories. The application aims to help users explore GitHub users and their repositories easily.

## Features

- Search for GitHub users by username.
- View the user's avatar and username.
- Expand/collapse user repositories to view repository details.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```shell
   $ git clone https://github.com/your-username/github-user-search.git
   ```
2. Navigate to the project directory:

   ```shell
   $ cd github-user-search
   ```

3. Install the dependencies:

   ```shell
   $ npm install
   ```

4. Start the development server:

   ```shell
   $ npm start
   ```

Open your web browser and visit http://localhost:3000 to access the application.

## Usage

- Enter a GitHub username in the search input field.
- Click the "Search" button or press Enter.
- The application will fetch and display up to 5 users that match the entered username.
- Click on a user's card to expand/collapse their repositories.
- When expanded, the user's repositories will be displayed with details such as repository name, description, and star count.

## Technologies Used

- React
- React Query (for data fetching)
- Axios (for HTTP requests)
- Emotion (for CSS styling)
