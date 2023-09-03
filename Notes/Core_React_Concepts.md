**IMP:** When working with `jsx`, self-closing tags are required!!

In context of Eslint:
`Brian Holt` says "Fix errors, don't force arbitrary opinions!!

For `.eslintrc.json` explanation, [check this out](https://react-v8.holt.courses/lessons/core-react-concepts/jsx)

**IMP: **

- `className`: class vs className ->JavaScript uses `class` keyword for defining classes in object oriented programming. To prevent any confusion, `jsx` uses `className` to set CSS classes on Elements
- `htmlFor`: for vs htmlFor -> JavaScript uses 'for' as a reserved keywords for loops. To avoid any conflict or confusion, jsx opted for `htmlFor` for associating label elements with input elements

## How Re-rendering works in React?

- In React, when a component is updated, it will re-render all of its children components. This means that any state or props that are passed down to child components will be re-evaluated and the child component will be re-rendered. This can be a performance issue if the child component is complex and re-renders frequently.

- To avoid this, it's important to use the `shouldComponentUpdate` lifecycle method to optimize the rendering of child components. This method is called every time a component is about to be re-rendered, and it allows you to return `false` if the component should not update. This can be useful if you have a complex child component that is expensive to render and you only want to update it when necessary.

- In addition, you can use memoization libraries like `reselect` or `react-memo` to optimize the rendering of complex child components. These libraries will cache the results of expensive computations and only re-compute them when the input props change. This can significantly improve the performance of your application.

**IMP:** DO NOT put hooks inside `if statements or loops`

### UseState Hook?

### Difference between `controlled` and `uncontrolled` components in React?

- controlled: When you use "React State" to control the values of the form input elements
- uncontrolled: Traditional Form handling using DOM
- [Read in DETAIL](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)

### `onBlur()` event handler?

- event handler that is triggered when an element loses focus when user clicks outside of it or navigates away form it using keyboard input (typically using "Tab" key)

### `UseEffect()` Hook?

- https://react.dev/reference/react/useEffect
- [Difference between passing array of dependencies,an empty array, and no dependencies as all](https://react.dev/reference/react/useEffect#examples-dependencies)

**IMP:** The `preventDefault()` function is to prevent the default form submission action of refreshing the page.

Custom hooks are just `other hooks` packaged together!!

**IMP:** If you wanna do `async/await` inside of an effect, you have to make an `async function` inside of that effect - Just that's how that Works!!

## Two Reasons to break a component into smaller components:

1. Reusability
2. Organization

## `Strict Mode` ?

- Lets you find common bugs early during developments
- Some Important Notes about `<StrictMode>` (It enables following checks!)

1. You components will `re-render an extra time` to find bugs caused by impure rendering.
2. Your components will `re-run the effects an extra time` to find bugs caused by missing effect cleanup
3. Your components will be `checked for usage of deprecated APIs`

## React Dev Tools?

- Maintained by React's Core Team
- Explore your React App like a `DOM Tree`
- Modify states and props on the fly to test things out
- tease out performance problems
- programmatically manipulate components
