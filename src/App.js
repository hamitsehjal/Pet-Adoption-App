const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed)
  ])
}


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!!"),
    React.createElement(Pet, { name: "luna", animal: "Dog", breed: "havanese" }),
    React.createElement(Pet, { name: "Dana", animal: "cat", breed: "tiger" }),
    React.createElement(Pet, { name: "express", animal: "donkey", breed: "monie" })
  ]

  )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

root.render(React.createElement(App))