### Functional Component

- Stateless functional component -> No states
- Always return JSX
- Just keep in mind that the reason why you have this HTML syntax is so it is easier for you to set up your return in the Components

```js
function Greeting() {
  // JSX
  return <h1>hello world</h1>;
}

const Greeting = () => {
  // (what element to return, props object, children)
  return React.createElement("h1", {}, "hello world");
};

function GreetingH1() {
  return (
    <div>
      <h1>Hello H1</h1>
    </div>
  );
}

const GreetingH1 = () => {
  // (what element to return, props object, children)
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello H1")
  );
};
/*
React.createElement("h1", {}, "hello world");

Now, one thing that when you're passing in the element here, you need to pass it in the quotation marks.

So when we're working with components and of course, we don't have to do that, but then if we're passing it into the function, we must set it up as quotation marks, because then React knows that, well,

this is going to be HTML elements and it is going to be the content in our element.
*/
```

============================================================

### HOT RELOADING ISSUES fixed

- `FAST_REFRESH = false` in `.env`
