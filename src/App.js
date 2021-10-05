import Nav from "./Nav";
import "./App.css";
import Home from "./Home";
import Dealproducts from "./Dealproducts";
import AllDetails from "./AllDetails";
import FruitDetails from "./FruitDetails";
import Vegetables from "./Vegetables";
import JuiceDetails from "./JuiceDetails";
import DriedDetails from "./DriedDetails";
import ViewCart from "./ViewCart";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/deal/:id">
            <Dealproducts />
          </Route>
          <Route path="/products/all/:id">
            <AllDetails />
          </Route>
          <Route path="/products/fruits/:id">
            <FruitDetails />
          </Route>
          <Route path="/products/Vegetables/:id">
            <Vegetables />
          </Route>
          <Route path="/products/juice/:id">
            <JuiceDetails />
          </Route>
          <Route path="/products/dried/:id">
            <DriedDetails />
          </Route>
          <Route path="/cart">
            <ViewCart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
