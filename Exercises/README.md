# React Exercises

## Setup

1. `cd Exercises/exercises-app`
2. `npm i`
3. `npm start`

---

## Exercise 1: Components, Props, and Layout

**Goal:** Learn how to create functional components, pass data via props, render dynamic content, and compose components using a layout pattern.

### Steps

1. **Create the Homepage component**
   - Open `src/components/Homepage/Homepage.jsx`
   - Create a functional component called `Homepage` that accepts `props` as a parameter
   - Export the component using a default export

2. **Create the Navbar component**
   - Create a new file `src/components/Navbar/Navbar.jsx`
   - Create a functional component called `Navbar`
   - Add placeholder content (e.g., site title or navigation links)
   - Export the component using a default export

3. **Create the Footer component**
   - Create a new file `src/components/Footer/Footer.jsx`
   - Create a functional component called `Footer`
   - Add placeholder content (e.g., copyright text)
   - Export the component using a default export

4. **Create the Layout component**
   - Open `src/components/Layout.jsx`
   - Create a functional component called `Layout` that accepts `children` as a prop
   - Import and render the `<Navbar />` at the top
   - Render `{children}` in the middle
   - Import and render the `<Footer />` at the bottom

5. **Import mock data**
   - Open `src/App.jsx`
   - Import the user data from `./mockUser.json`

6. **Compose the app**
   - In `App.jsx`, import the `Layout` and `Homepage` components
   - Wrap `<Homepage />` inside `<Layout>` as a child
   - Pass the imported user object as a prop to Homepage (e.g., `user={mockUser}`)

7. **Display a welcome message**
   - In `Homepage.jsx`, use the props to display a personalized greeting
   - Example output: "Greetings, John"

### Hints

- To import JSON: `import mockUser from './mockUser.json'`
- Access props in the component: `props.user.firstName`
- You can destructure props: `function Homepage({ user })`
- The `children` prop is a special React prop that contains nested elements

### Expected Result

When you run the app, you should see:

- A Navbar at the top
- A welcome message displaying the user's first name from the mock data
- A Footer at the bottom

---

## Exercise 2: State and Form Handling

**Goal:** Learn how to manage component state with `useState`, handle form inputs with `onChange`, and process form submissions with `onSubmit`.

### Steps

1. **Create the ContactForm component**
   - Create a new file `src/components/ContactForm/ContactForm.jsx`
   - Import `useState` from React
   - Create a functional component called `ContactForm`
   - Export the component using a default export

2. **Set up state for form fields**
   - Inside `ContactForm`, create state variables for:
     - `name` (string, initially empty)
     - `email` (string, initially empty)
     - `message` (string, initially empty)
   - Example: `const [name, setName] = useState('')`

3. **Build the form JSX**
   - Return a `<form>` element containing:
     - A text input for name with a label
     - An email input for email with a label
     - A textarea for message with a label
     - A submit button

4. **Connect inputs to state with onChange**
   - Add a `value` attribute to each input, bound to its corresponding state variable
   - Add an `onChange` handler to each input that updates the state

5. **Handle form submission**
   - Create a `handleSubmit` function that:
     - Accepts the event as a parameter
     - Calls `e.preventDefault()` to stop the page from refreshing
     - Logs the form data to the console: `{ name, email, message }`
     - Optionally clears the form by resetting all state values to empty strings
   - Attach this function to the form's `onSubmit` attribute

6. **Add the form to your app**
   - In `App.jsx`, import the `ContactForm` component
   - Render `<ContactForm />` inside the `<Layout>` component (below or instead of Homepage)

7. **Test your form**
   - Fill out all fields and click submit
   - Check the browser console to see the logged form data
   - Verify that the form clears after submission (if you implemented that)

### Hints

- Import useState: `import { useState } from 'react'`
- Controlled inputs require both `value` and `onChange`
- Always call `e.preventDefault()` in form submit handlers to prevent page reload
- You can create a single state object instead of separate variables:
  ```jsx
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  ```

### Expected Result

When you run the app, you should see:

- A form with name, email, and message fields
- Typing in any field updates the displayed value in real-time
- Clicking submit logs the form data to the console and optionally clears the form

## Exercise 3: Routing

**Goal:** Learn how to set up client-side routing with `react-router-dom`, create navigation links, and render different components based on the URL.

### Setup

First, install react-router-dom:

```bash
npm install react-router-dom
```

### Steps

1. **Set up the Router in App.jsx**
   - Open `src/App.jsx`
   - Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`
   - Wrap your entire app in `<BrowserRouter>`
   - Inside the `<App>` component, use `<Routes>` to define your route configuration

2. **Create route definitions**
   - Add a `<Route>` for the homepage at path `"/"`
   - Add a `<Route>` for the contact form at path `"/contact"`
   - Each route should render its corresponding component using the `element` prop
   - Example: `<Route path="/" element={<Homepage user={mockUser} />} />`

3. **Update the Navbar with Link components**
   - Open `src/components/Navbar/Navbar.jsx`
   - Import `Link` from `react-router-dom`
   - Replace any `<a>` tags with `<Link>` components
   - Use the `to` prop instead of `href`
   - Example: `<Link to="/">Home</Link>`

4. **Add navigation links using Link**
   - Create a link to Home: `<Link to="/">Home</Link>`
   - Create a link to Contact: `<Link to="/contact">Contact</Link>`

5. **Test your routes**
   - Click the navigation links and verify the URL changes
   - Verify the correct component renders for each route
   - Try manually typing URLs in the browser address bar

6. **Create a button that navigates using Link**
   - In the `Homepage` component, add a button that links to the contact page
   - Wrap a `<button>` element inside a `<Link>` component
   - Alternatively, style the `Link` itself to look like a button using CSS

7. **Upgrade to NavLink for active styling in Navbar**
   - Replace `Link` with `NavLink` in your imports
   - Replace `<Link>` components with `<NavLink>` components
   - `NavLink` automatically adds an "active" class when the link matches the current URL
   - Add CSS to style the active state:

8. **Customize NavLink active behavior (optional)**
   - Use the `className` prop with a function to apply custom classes
   - Alternatively, use the `style` prop with a function for inline styles:

### Hints

- `BrowserRouter` must wrap everything that uses routing
- `Routes` is a container for all your `Route` definitions
- Each `Route` needs a `path` and an `element` prop
- Use `Link` instead of `<a>` tags to prevent full page reloads
- The `to` prop on both `Link` and `NavLink` works like `href` on anchor tags
- `NavLink` is like `Link` but adds automatic "active" class when the route matches
- `NavLink` accepts `className` and `style` as functions that receive `{ isActive }`

### Expected Result

When you run the app, you should see:

- A Navbar with clickable links for Home and Contact
- Clicking "Home" navigates to `/` and shows the Homepage component
- Clicking "Contact" navigates to `/contact` and shows the ContactForm component
- The URL in the browser updates without a full page reload
- The Navbar and Footer remain visible on all pages (they're in the Layout)
- If using `NavLink`, the current page's link should have the "active" class applied

## Exercise 4: Fetching Data from an API

**Goal:** Learn how to fetch data from an external API using `useEffect` and `useState`, display a list of items, and handle navigation to show individual item details.

### API Reference

We'll use the Star Wars API (SWAPI):

- **Base URL:** `https://swapi.info/api/people`
- This endpoint returns an array of Star Wars characters with properties like `name`, `height`, `mass`, `birth_year`, etc.

### Steps

1. **Create the CharacterList component**
   - Create a new file `src/components/CharacterList/CharacterList.jsx`
   - Import `useState` and `useEffect` from React
   - Create a functional component called `CharacterList`
   - Export the component using a default export

2. **Set up state for characters and loading**
   - Create state for `characters` (array, initially empty)
   - Create state for `loading` (boolean, initially `true`)
   - Create state for `error` (string or null, initially `null`)

3. **Fetch characters on component mount**
   - Use `useEffect` with an empty dependency array `[]` to fetch data once on mount
   - Inside the effect, create an async function to fetch from `https://swapi.info/api/people`
   - Parse the JSON response and update the `characters` state
   - Set `loading` to `false` when done
   - Handle errors by setting the `error` state

4. **Render the character list**
   - If `loading` is true, display a loading message
   - If `error` is set, display the error message
   - Otherwise, map over `characters` and display each character's name
   - Each character should be clickable (we'll add navigation in a later step)

5. **Create the CharacterDetail component**
   - Create a new file `src/components/CharacterDetail/CharacterDetail.jsx`
   - Import `useState`, `useEffect` from React
   - Import `useParams` and `Link` from `react-router-dom`
   - Create a functional component called `CharacterDetail`

6. **Fetch individual character data**
   - Use `useParams()` to get the character ID from the URL
   - Use `useEffect` to fetch character data from `https://swapi.info/api/people/{id}`
   - Store the character data in state and handle loading/error states

7. **Display character details**
   - Show the character's name as a heading
   - Display additional information:
     - Height
     - Mass
     - Hair color
     - Eye color
     - Birth year
     - Gender
   - Add a "Back to Characters" link using `<Link to="/characters">`

8. **Set up routes for characters**
   - In `App.jsx`, import the new components
   - Add a route for the character list: `<Route path="/characters" element={<CharacterList />} />`
   - Add a route for character details: `<Route path="/characters/:id" element={<CharacterDetail />} />`

9. **Make character names clickable**
   - In `CharacterList`, import `Link` from `react-router-dom`
   - Wrap each character name in a `<Link>` that navigates to `/characters/{id}`
   - Extract the ID from the character's `url` property (the last segment of the URL)

10. **Add Characters link to Navbar**
    - In `Navbar.jsx`, add a new `<NavLink>` to `/characters`

### Hints

- Fetch pattern with useEffect:

  ```jsx
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://swapi.info/api/people");
        const data = await response.json();
        setCharacters(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch characters");
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);
  ```

- Extract ID from SWAPI URL:

  ```jsx
  const getIdFromUrl = (url) => {
    const segments = url.split("/");
    return segments[segments.length - 1] || segments[segments.length - 2];
  };
  ```

- Using useParams:

  ```jsx
  const { id } = useParams();
  // Then fetch from: `https://swapi.info/api/people/${id}`
  ```

- Conditional rendering pattern:
  ```jsx
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <div>{/* your content */}</div>;
  ```

### Expected Result

When you run the app, you should see:

- A "Characters" link in the Navbar
- Clicking "Characters" shows a list of Star Wars character names
- A loading message appears while fetching data
- Clicking on a character name navigates to `/characters/{id}`
- The detail page shows full character information (name, height, mass, etc.)
- A "Back to Characters" link returns to the list
- Error handling displays a message if the API request fails

## Exercise 5: useContext

**Goal:** Learn how to share state across multiple components without prop drilling using React's Context API. You'll create a character context to store fetched data globally and a favorites system to track user selections across the app.

### Part A: Character Context (Store API Data Globally)

**Goal:** Move the character fetching logic into a context so multiple components can access the character data without re-fetching or prop drilling.

#### Steps

1. **Create the context folder and file**
   - Create a new folder `src/context`
   - Create a new file `src/context/CharacterContext.jsx`
   - Import `createContext`, `useState`, `useEffect`, and `useContext` from React

2. **Create and export the context**
   - Use `createContext()` to create a new context
   - Export it as a named export called `CharacterContext`

3. **Create the CharacterProvider component**
   - Create a functional component called `CharacterProvider` that accepts `children` as a prop
   - Inside, set up state for `characters` (array, initially empty)
   - Set up state for `loading` (boolean, initially `true`)
   - Set up state for `error` (string or null, initially `null`)

4. **Move the fetch logic into the provider**
   - Add a `useEffect` hook with an empty dependency array
   - Inside, fetch characters from `https://swapi.info/api/people`
   - Update the `characters` state with the fetched data
   - Set `loading` to `false` when done
   - Handle errors by setting the `error` state

5. **Return the Provider with values**
   - Return `<CharacterContext.Provider>` wrapping `{children}`
   - Pass an object to the `value` prop containing `characters`, `loading`, and `error`
   - Export the `CharacterProvider` component

6. **Create a custom hook for consuming the context**
   - In the same file, create a function called `useCharacters`
   - Inside, call `useContext(CharacterContext)` and store the result
   - Add a check: if the context is undefined, throw an error with a helpful message
   - Return the context value
   - Export the hook

7. **Wrap your app with the CharacterProvider**
   - Open `App.jsx`
   - Import `CharacterProvider` from the context file
   - Wrap your existing content (inside `BrowserRouter`) with `<CharacterProvider>`

8. **Refactor CharacterList to use context**
   - Open `CharacterList.jsx`
   - Remove all the local state variables (`characters`, `loading`, `error`)
   - Remove the `useEffect` that fetches data
   - Import and call the `useCharacters` hook
   - Destructure `characters`, `loading`, and `error` from the hook's return value
   - The rest of your JSX should work without changes

9. **Display character count in the Navbar**
   - Open `Navbar.jsx`
   - Import the `useCharacters` hook
   - Call the hook and destructure `characters`
   - Update the Characters link text to include the count (e.g., "Characters (82)")

### Part B: Favorites Context (User Interactions)

**Goal:** Create a favorites system that allows users to save their favorite characters, accessible from any component.

#### Steps

1. **Create the FavoritesContext file**
   - Create a new file `src/context/FavoritesContext.jsx`
   - Import `createContext`, `useState`, and `useContext` from React

2. **Create and export the context**
   - Use `createContext()` to create a new context
   - Export it as `FavoritesContext`

3. **Create the FavoritesProvider component**
   - Create a functional component called `FavoritesProvider` that accepts `children`
   - Set up state for `favorites` (array, initially empty)

4. **Create the addFavorite function**
   - Create a function that accepts a character object
   - Use the state setter to add the character to the favorites array
   - Use the spread operator to preserve existing favorites

5. **Create the removeFavorite function**
   - Create a function that accepts a character ID
   - Use the state setter with `filter` to remove the character with that ID

6. **Create the isFavorite function**
   - Create a function that accepts a character ID
   - Use the `some` array method to check if any favorite has that ID
   - Return `true` or `false`

7. **Create the toggleFavorite function**
   - Create a function that accepts a character object
   - Check if the character is already a favorite using `isFavorite`
   - If yes, call `removeFavorite`; if no, call `addFavorite`

8. **Return the Provider with all values**
   - Return `<FavoritesContext.Provider>` wrapping `{children}`
   - Pass an object to `value` containing: `favorites`, `addFavorite`, `removeFavorite`, `isFavorite`, and `toggleFavorite`
   - Export the component

9. **Create the useFavorites custom hook**
   - Create a function called `useFavorites`
   - Call `useContext(FavoritesContext)` and add error handling
   - Export the hook

10. **Add FavoritesProvider to your app**
    - Open `App.jsx`
    - Import `FavoritesProvider`
    - Nest it inside `CharacterProvider` (providers can be nested)

11. **Add favorite button to CharacterList**
    - Open `CharacterList.jsx`
    - Import the `useFavorites` hook
    - Destructure `toggleFavorite` and `isFavorite` from the hook
    - Inside your character map, add a button next to each character
    - Set the button's `onClick` to call `toggleFavorite` with the character's id and name
    - Use `isFavorite` to conditionally show different text (e.g., filled star vs empty star)

12. **Add favorite button to CharacterDetail**
    - Open `CharacterDetail.jsx`
    - Import and use the `useFavorites` hook
    - Add a favorite toggle button that works the same way as in the list

13. **Create a Favorites page component**
    - Create a new file `src/components/Favorites/Favorites.jsx`
    - Import `Link` from `react-router-dom`
    - Import the `useFavorites` hook
    - Create a functional component that displays all favorited characters
    - Map over the favorites array and show each character's name as a link to their detail page
    - Add a "Remove" button for each that calls `removeFavorite`
    - Handle the empty state with a message like "No favorites yet"

14. **Add the Favorites route**
    - Open `App.jsx`
    - Import the `Favorites` component
    - Add a new Route with path `/favorites` that renders the Favorites component

15. **Add Favorites link to Navbar**
    - Open `Navbar.jsx`
    - Import the `useFavorites` hook
    - Destructure `favorites` from the hook
    - Add a new NavLink to `/favorites`
    - Display the favorites count in the link text (e.g., "Favorites (3)")

### Part C: Theme Context (Bonus Challenge)

**Goal:** Implement a dark/light theme toggle using context.

#### Steps

1. **Create the ThemeContext file**
   - Create a new file `src/context/ThemeContext.jsx`
   - Import `createContext`, `useState`, and `useContext` from React

2. **Create the ThemeProvider component**
   - Create the context with `createContext()`
   - Create a `ThemeProvider` component with `children` prop
   - Set up state for `theme` (string, initially `'light'`)

3. **Create the toggleTheme function**
   - Create a function that toggles the theme value
   - If current theme is `'light'`, set it to `'dark'`
   - If current theme is `'dark'`, set it to `'light'`

4. **Set up the Provider and custom hook**
   - Return the Provider with `theme` and `toggleTheme` in the value
   - Create and export a `useTheme` custom hook

5. **Add ThemeProvider to your app**
   - In `App.jsx`, import and wrap your app with `ThemeProvider`
   - You can nest it with the other providers

6. **Apply theme class to Layout**
   - Open `Layout.jsx`
   - Import and use the `useTheme` hook
   - Add a class to the root element based on the current theme
   - Use a ternary: if theme is `'dark'`, use `'dark-theme'`, otherwise `'light-theme'`

7. **Add theme CSS variables**
   - Open your main CSS file (e.g., `App.css` or `index.css`)
   - Define CSS variables for `.light-theme` (light background, dark text)
   - Define CSS variables for `.dark-theme` (dark background, light text)
   - Apply these variables to your body or main container styles

8. **Add a theme toggle button**
   - In `Navbar.jsx`, import the `useTheme` hook
   - Destructure `theme` and `toggleTheme`
   - Add a button that calls `toggleTheme` when clicked
   - Display text or an icon indicating the current theme

### Hints

- Creating context: `const MyContext = createContext()`
- Provider syntax: `<MyContext.Provider value={{ data, functions }}>{children}</MyContext.Provider>`
- Consuming context: `const value = useContext(MyContext)`
- Custom hooks should start with "use" and can add error handling for when context is missing
- You can nest multiple providers - each provides different data to its children
- The `value` prop accepts any JavaScript value (object, array, function, etc.)
- Use the spread operator to add items: `setItems(prev => [...prev, newItem])`
- Use `filter` to remove items: `setItems(prev => prev.filter(item => item.id !== idToRemove))`
- Use `some` to check existence: `items.some(item => item.id === targetId)`

### Expected Result

When you run the app, you should see:

**Part A:**
- Character data is fetched once when the app loads
- The Navbar shows the character count (e.g., "Characters (82)")
- CharacterList displays characters without its own fetch logic
- No duplicate API calls when navigating between pages

**Part B:**
- Each character in the list has a favorite button
- Clicking the button toggles between filled and empty star
- Character detail page also has a working favorite button
- Navigating to `/favorites` shows all saved favorites
- The Navbar shows the favorites count
- Favorites persist when navigating between pages (but reset on page refresh)

**Part C (Bonus):**
- A theme toggle button appears in the Navbar
- Clicking it switches the entire app between light and dark themes
- The theme applies consistently across all pages

---
