# QuickSell Frontend Assignment

An interactive Kanban board application built using React JS and SCSS. The board dynamically adjusts based on user grouping preferences. It interacts with the provided API from [Quicksell](https://api.quicksell.co/v1/internal/frontend-assignment).

## Features

- **Conditional Rendering**: Components are rendered based on the state and user preferences.
- **Grouping**:
  - **By Status**: Tickets are grouped based on their current status.
  - **By User**: Tickets are arranged according to the assigned user.
  - **By Priority**: Tickets are grouped based on their priority level.
- **Sorting**:
  - **Priority**: Tickets are arranged in descending order of priority.
  - **Title**: Tickets are sorted in ascending order based on their title.
- **User's View State Persistence**: The application saves the user's view state, even after a page reload.
- **Dynamic Data**: Fetches and displays data from the Quicksell API.
- **Custom Spinner**: An engaging spinner for better user experience during data fetching or other waiting times.
- **Available User Indicator**: Displays which users are currently available.

## Live Demo

Experience the application [here](https://quicksell-task-hargun-singh.onrender.com/).

## Repository

Find the source code on [GitHub](https://github.com/hargun0360/QuickSell-Frontend-Assignment).

## Tech Stack

- **JavaScript**
- **React JS**
- **SCSS (CSS Preprocessor)**

## Preview

##### Priority Display
![alt text](https://github.com/hargun0360/SHL-Assesment/assets/89998804/a069cc24-ac36-4ce9-b61b-956d98fee520)

##### User Display
![alt text](https://github.com/hargun0360/SHL-Assesment/assets/89998804/ab927302-faf5-44c3-8003-1b34d5891d9a)

##### Status Display
![alt text](https://github.com/hargun0360/SHL-Assesment/assets/89998804/cb872b9a-5b6e-4018-ab54-a8b08cea1c99)

##### Priority with Ordering title
![alt text](https://github.com/hargun0360/SHL-Assesment/assets/89998804/65044241-197c-44a6-ae49-976c15e2ee4f)

##### Status Display with Ordering title
![alt text](https://github.com/hargun0360/SHL-Assesment/assets/89998804/0aa694eb-6feb-445b-83b8-372d2d05b385)

##### Status Display with Ordering Priority
![alt text](https://github.com/hargun0360/SHL-Assesment/assets/89998804/a294c9d0-b7f1-48c9-aba8-dafe4a444ddb)

##### User Display with Ordering Priority
![alt text](https://github.com/hargun0360/SHL-Assesment/assets/89998804/413cf816-88b0-4fd0-893d-b9684c44e865)
