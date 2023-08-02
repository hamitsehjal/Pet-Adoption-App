# React workshop with Brian Holt

## React and ReactDOM

**Question-1:** What is the difference between React and ReactDOM?
- React is the library responsible for creating and managing reusable UI components and state.
- ReactDOM is the supporting library responsible for rendering the UI components in the browser's DOM (Document Object Model).

**Imp:** When building web applications with React, you typically include both React and ReactDOM for their respective functionalities. However, if you are working with React in a different environment, like mobile or desktop, you might not need ReactDOM as the rendering process is handled differently for those platforms.

## Content Delivery Network vs. Downloading Packages in Projects

### Content Delivery Network (CDN)

A Content Delivery Network (CDN) is a distributed network of servers strategically located in various geographical locations. Its purpose is to deliver web content, such as JavaScript libraries, CSS stylesheets, images, and other assets, to users from the nearest server location. When a user requests a resource from a website that uses a CDN, the CDN identifies the closest server and serves the content from there. This approach aims to reduce latency and improve the loading time for users, especially those located far away from the website's origin server.

**Advantages of using a CDN:**
1. Faster loading times: Since content is served from servers closer to the user, it reduces the time it takes to retrieve the resources, resulting in faster page load times.
2. Improved website performance: CDN offloads server resources, reducing the load on the website's origin server and ensuring a smoother experience for users.
3. Scalability: CDNs can handle high volumes of traffic and are designed to scale effortlessly as the website's user base grows.
4. Caching: CDNs often cache resources, which means subsequent requests for the same content can be served directly from the CDN's cache, reducing server load and response times.

### Downloading Packages in Projects

Downloading packages in projects refers to the traditional approach of manually downloading and including external libraries or dependencies in a web project. In this approach, developers download the necessary files or packages from sources like npm (Node Package Manager) or other package repositories and include them directly in their project's source code.

**Advantages of downloading packages in projects:**
1. Control over versions: Developers can choose specific versions of packages that suit their project's requirements.
2. Offline usage: Once downloaded, the packages are available locally, allowing the project to be developed and tested offline.
3. Security: By directly including packages from trusted sources, developers can ensure the security and integrity of their project's dependencies.

**Potential downsides to this approach:**
1. Maintenance burden: Manually managing and updating packages can be time-consuming, especially in larger projects with numerous dependencies.
2. Version conflicts: Different packages may require specific versions of their dependencies, leading to version conflicts that can be challenging to resolve.
3. Slower loading times: If packages are hosted on servers far from the user, it can increase the loading times compared to using a CDN.

### Which Approach to Choose?

The choice between using a CDN and downloading packages in projects depends on various factors, including project requirements, performance considerations, and development preferences. For widely used and popular libraries like React or jQuery, using a CDN can be advantageous due to faster loading times and reduced server load. On the other hand, for projects with specific version requirements or when offline development is essential, downloading packages may be more suitable.

In some cases, a hybrid approach can be adopted, where critical packages are loaded via a CDN to ensure faster page loads, while less critical packages are downloaded and managed directly within the project to maintain better control over versions and offline development capabilities.


**Question-2:** Using `unpkg` Content Delivery Network?
    - **Figure OUT!!**

**Question-3:** What is the usage of `React.createElement(type, props, children...)`?


`React.createElement(type, props, children...)` is a fundamental method in React, which is used to create and return a React element or virtual DOM representation of a component or HTML element. It plays a crucial role in the React rendering process, allowing developers to define the structure of their React components in a more concise and declarative manner.

Here's a breakdown of the parameters:

1. **`type`**: This can be either a string representing the HTML element (e.g., 'div', 'span', 'h1', etc.) or a reference to a custom React component. It determines the type of the element to be created. If it is a string, a corresponding HTML element will be created, and if it is a React component, an instance of that component will be created.

2. **`props`**: This is an object that contains the properties or attributes to be assigned to the element being created. These properties will be used by the React component to configure its behavior and appearance. For example, if you want to pass the `className`, `style`, or custom props to the element, you would define them in the `props` object.

3. **`children`**: This is an optional parameter that represents the child elements or content of the created element. It can be a single child element, an array of child elements, or just plain text. Children are the nested elements that will be rendered within the parent element.

The `React.createElement()` function is primarily used when you're not using JSX (JavaScript XML) in your code. JSX is a popular syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript files. When JSX is used, the compiler translates the JSX elements into corresponding `React.createElement()` calls.

For example, consider a simple React component written without JSX:

```jsx
// Without JSX
import React from 'react';

const MyComponent = () => {
  return React.createElement('div', { className: 'container' },
    React.createElement('h1', null, 'Hello, World!'),
    React.createElement('p', null, 'This is a React component.')
  );
};

export default MyComponent;
```
Here an equivalent code with `jsx`:

```jsx
// With JSX
import React from 'react';

const MyComponent = () => {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
      <p>This is a React component.</p>
    </div>
  );
};

```

export default MyComponent;


## IMPORTANT: React has a one-way data flow

- **Passing Information from Parent to Child:**
  In React, components are organized in a tree-like structure, where one component can be nested inside another. The `one-way data flow` dictates that data should always flow from parent components to child components and not the other way around. In other words, data is handed down the component hierarchy. This means that a parent component can pass data (or props) to its child components as parameters when they are rendered.

- **Straightforward Debugging:**
  One of the key advantages of the one-way data flow is that it simplifies the debugging process. Since data flows in a single direction, from parent to child, it becomes easier to track how changes in data are propagated through the components. When a component receives updated data from its parent, it triggers a re-render, updating the UI accordingly. As a result, if a problem arises in the application, developers can focus their debugging efforts on the component hierarchy's root, knowing that data changes can only originate from there and flow down.

  This clear and predictable flow of data significantly reduces the chances of hard-to-find bugs caused by complex interactions between components. Developers can quickly pinpoint issues and understand which part of the application is causing the problem, streamlining the debugging process and improving overall development efficiency.

- **Explicit Data Flow:**
  The one-way data flow in React promotes an explicit data flow pattern. This means that data changes are transparently traced, and developers can easily understand how data is passed and used within the application. The data flow is more apparent and comprehensible compared to other patterns, such as two-way data binding, where data changes can happen in multiple directions, making it harder to keep track of changes and potential side effects.

  By keeping the data flow unidirectional, React applications become more maintainable and scalable. Developers can modify or extend the application's functionality with confidence, knowing that changes in one part of the component hierarchy will not unexpectedly affect unrelated parts.

In conclusion, the `one-way data flow` is a fundamental concept in React that promotes a clear and predictable flow of data from parent to child components. This approach simplifies debugging efforts and enhances the maintainability of React applications, making it a powerful principle in the React development paradigm.


## Code Formatting and Dependency Installation

- `prettier` - auto formats the code.
- `npm install -D` - installs a package as a development dependency.
- `npm install --save-dev` - same as above, installs a package as a development dependency.
- `^2.7.1` - install the latest patch version.
- `prettier --write "src/**/*.{js,jsx}"` - a command to run Prettier and auto-format all JavaScript and JSX files in the "src" directory.

## ESLint Setup

- `npm install --save-dev eslint` - installs ESLint as a development dependency.
- `npm install -D eslint-config-prettier` - Turn off all rules that are unnecessary or might conflict with Prettier.

**Question:** What is the difference between the following commands?
- `$ npm run lint --debug`
- `$ npm run lint -- --debug`

(Note: The content regarding the difference between these two commands is missing from the provided notes.)
