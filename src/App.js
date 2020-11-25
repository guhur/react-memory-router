import React, { createContext, Component, useContext } from "react";
import "./styles.css";
import NavBar from "./MyComponents";

const initialEntries = ["/"];
const initialIndex = 0;

const MemoryContext = createContext({
  initialEntries: initialEntries,
  initialIndex: initialIndex
});

class Route extends Component {
  static contextType = MemoryContext;
  render() {
    const { path, children } = this.props;
    const { location } = this.context;

    if (path === location) {
      console.log("Youhou! We are in ", location);
      return children;
    }
    console.log("We are in ", location, "not in ", path);
    return null;
  }
}

const Link = ({ to, children }) => {
  const { setLocation } = useContext(MemoryContext);
  console.log(setLocation);
  return (
    <span className="link" onClick={() => setLocation(to)}>
      {children}
    </span>
  );
};

class MemoryRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.initialEntries[initialIndex],
      setLocation: (location) => {
        console.log("Moving from", this.location, "to", location);
        this.setState({ location });
      }
    };
  }
  render() {
    const { location, setLocation } = this.state;
    return (
      <MemoryContext.Provider
        value={{ location: location, setLocation: setLocation }}
      >
        {this.props.children}
      </MemoryContext.Provider>
    );
  }
}

MemoryRouter.defaultProps = {
  initialEntries: initialEntries,
  initialIndex: initialIndex
};

export default function App() {
  return (
    <MemoryRouter initialEntries={["/home"]}>
      <Route path="/home">
        <h1>Accueil</h1>
      </Route>
      <Route path="/about">
        <h1>Qui sommes-nous ?</h1>
      </Route>
      <Route path="/contact">
        <h1>Contact</h1>
      </Route>
      <nav>
        <ul>
          <li>
            <Link to="/home">Aller sur la page d'accueil</Link>
          </li>
          <li>
            <Link to="/about">Aller sur qui sommes-nous ?</Link>
          </li>
          <li>
            <Link to="/contact">Aller sur contact</Link>
          </li>
        </ul>
      </nav>
    </MemoryRouter>
  );
}
