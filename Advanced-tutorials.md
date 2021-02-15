### Why usestate?

- We should re-render components
- We change the value -> we should render the component
- What if there's no way to preserve the value in between the renders?

- Essentially, we would want two things(preserve, re-render)
- We would want to keep the values between the renders
- We would want to triger that re-render

### General Rules of Hooks

- Component name must be uppercase
- MUST be in the function/component BODY
- cannot call onditionally

### Why useEffect

- What is side effect? -> anywork outside of the component
  - ex) changing document title, signing up for subscription, fetching data, setting up event listners, console.log
- Think of work outside of component.
- We pass in the call back funciton
- 1. Preserve values between the renders
- 2. It triggers re-render
- 3. Every time when clicking the button, you are essentially running useEffect
- 4. By default, useEffect will run after every render
