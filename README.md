1. My project name is DevStack
2. Description: DevStack is a simple web application where users can explore different web development technologies and build their own technology stack. Users can add technologies to their personal stack and manage them easily.
3. Technologies Used
* React
* TypeScript
* Tailwind CSS
* Vite
* JavaScript
* JSON API / JSON Data
4. Main Feature 
* Browse Technologies
Users can see different web development technologies with their names, descriptions, and other information.
* Add Technologies to Stack
Users can add their favorite technologies to Your Stack section.
* Remove Technologies
Users can remove technologies from their personal stack when they no longer need them.


** React Question & Answer 
1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript/TypeScript. React uses JSX to make the UI code easier to write and understand.

2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component.
State is data that belongs to a component and can change when the user interacts with the application.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store and manage changing data inside a React component.In this project, I used useState to manage the technologies added to the user's stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component, such as fetching data from an API or JSON file.I used useEffect to load the technology data from the JSON file when the application starts.

5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list. It helps React understand which item was changed, added, or removed.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

For example, when there are no technologies in the stack:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList />
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

<TechnologyCard
  technology={technology}
  addToStack={addToStack}
/>

Here, technology and addToStack are passed from the parent to the child.

The child can send data back to the parent by calling a function received through props.

<button onClick={() => addToStack(technology)}>
  Add to Stack
</button>

So, simply:

Parent → Child: Props
Child → Parent: Callback function through props