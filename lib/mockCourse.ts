 const mockCourse = {
  chapter1: {
    "les-01-01": {
      title: "What is React & The Component Model",
      content: `## The Component Model
React focuses almost exclusively on the **View** layer. Its core strength is the **Component Model**, which breaks complex UIs into independent, reusable pieces.
- **Components as Functions:** In modern React, components are just JavaScript functions that return UI elements.
- **Composition:** You build complex apps by nesting small components (like \`Button\`) inside larger ones (like \`Navbar\`).
- **Unidirectional Data Flow:** Data flows **down** from parent to child via *props*.

\`\`\`jsx
function Button({ label }) {
  return <button>{label}</button>;
}
\`\`\``
    },
    "les-01-02": {
      title: "Declarative vs. Imperative UI",
      content: `## Understanding the "React Mindset"

### Imperative (The "How")
In vanilla JS, you give step-by-step instructions.
*   *Example:* "Find button. Add class 'active'. Change text to 'ON'."

### Declarative (The "What")
In React, you describe the end state.
*   *Example:* "If \`isActive\` is true, the button looks like this."

| Feature | Imperative (Vanilla JS) | Declarative (React) |
| :--- | :--- | :--- |
| **Focus** | Steps to change UI | Final UI State |
| **State** | Manual DOM updates | State drives UI |`
    },
    "les-01-03": {
      title: "Understanding the Virtual DOM",
      content: `The **Virtual DOM (VDOM)** is a lightweight copy of the real DOM in memory.

### Why use it?
Direct DOM manipulation is slow. React minimizes this cost by:
1.  **Render:** Creating a new VDOM tree on state change.
2.  **Diffing:** Comparing the new tree with the old one.
3.  **Commit:** Applying only the *minimal* changes to the real browser DOM.`
    }
  }
};
export default mockCourse;