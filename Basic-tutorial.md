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

### Javascript

- JavaScript has properties and values
- Values MUST include quotation marks.

```js
<h4 style={{ color: "red" }}>JavaScript has properties and values</h4>
```

```jsx
const OutsideVariable = "This works! Good job!";
const Book = () => {
  {/*Variable  */}
  const title = 'You are awesome";
  return (
    <>
    {/*Values*/}
      <h1>{OutsideVariable}</h1>
      <h1>{OutsideVariable.toUpperCase()}</h1>
      <h1>{title}</h1>
      <h1>{title}</h1>
      {9+20}
    </>
  )
}
```

- Destructuring

```js
const DestructuringExample = (props) => {
  const {img, title, author} = props
  return (
    <>

      <img src={img}>
      <h1>{title}</h1> // props.title
      <h1>{author}</h1>
    </>
  );
}
```

- Object Destructuring

```js
const DestructuringExample = ({img, title, author}) => {
  return (
    <>
      <img src={img}>
      <h1>{title}</h1>
      <h1>{author}</h1>
    </>
  );
}
```

### Why do we need props?

- So now I want to take a look at how we can change these values here depending on whatever we are passing.

### Why hooks?

[check out the sorce]("https://blog.bitsrc.io/6-reasons-to-use-react-hooks-instead-of-classes-7e3ee745fe04")

- Hooks let you always use functions instead of having to constantly switch between functions, classes, higher-order components, and render props.

1. You don’t have to refactor a functional component into a class component when it grows
2. You don’t have to worry about “this” anymore (Classes confuse both people and machines)
3. No more method bindings
4. Easier to decouple logic from UI, making both more reusable
5. Keep related logic in the same place(Complex components become hard to understand)
6. Sharing stateful logic between components (Custom React Hooks you can extract these reusable stateful logics and test them separately)

```js
export class ShowCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.setState({
      count: this.props.count,
    });
  }

  render() {
    return (
      <div>
        <h1> Count : {this.state.count} </h1>
      </div>
    );
  }
}
```

```js
export function ShowCount(props) {
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(props.count);
  }, [props.count]);

  return (
    <div>
      <h1> Count : {count} </h1>
    </div>
  );
}
```

### HOT RELOADING ISSUES fixed

- `FAST_REFRESH = false` in `.env`

### Objects are not valid as a React child, If you meant to render a collection of children, use an array instead.

- It just means that you either haven't the destructured properly or you're not accessing properly.

### Each child in a list should have a unique "key" prop.

- What we would want to do with list is, for example, to remove some items or maybe add the items and react, wants to keep a track of what we're adding, what we're removing.
- It's going to be a problem if you're actually doing something with the list with MAP(index)
- map(index) is changing as your array is changing. Not safe.
