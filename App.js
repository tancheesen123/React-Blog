import Navbar from "./src/Component/Navbar";
import Home from "./src/Component/Home";
import Create from "./src/Component/Create";
import BlogDetails from "./src/Component/BlogDetails";
import NotFound from "./src/Component/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>

            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound/>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
