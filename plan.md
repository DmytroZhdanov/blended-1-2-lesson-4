# Lesson 4. Plan

- Kahoot
- Question-Answer Session
- Practical Session

## Tasks

### Step 1

Perform refactoring of the **"TODO LIST"** application using `react-hooks`

### Step 2

Refactor the **"TODO LIST"** application, implementing state management using the [Redux Toolkit](https://redux-toolkit.js.org/) library.

Let the Redux state look as follows.

```bash
{
  todos: [],
}
```

- Create a store with `configureStore()`
- Create reducers for todos using the `createSlice()` function.
- Connect React components to Redux logic using the hooks from the `react-redux` library

```bash
npm install @reduxjs/toolkit react-redux
```

[react-redux](https://react-redux.js.org/).

- Utilize the [redux-persist](https://github.com/rt2zz/redux-persist#basic-usage) library to store the entire application state in local storage.

- Use this [configuration](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist) for the store
