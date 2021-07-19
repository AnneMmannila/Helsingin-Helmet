import Frontpage from "./components/frontpage";
import { makeStyles } from "@material-ui/core/styles";
import Suurlahetystot from "./components/suurlahetystot";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Kauneimmatkirkot from "./components/kauneimmatkirkot";
import Muutkohteet from "./components/muutkohteet";

//creating style for the whole frontpage
const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFBAD2",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
       
            <Route exact path="/">
              <Link style={{ textDecoration: "none" }} to="/suurlahetystot">
                <Frontpage />
              </Link>
            </Route>
         
          <Route path="/suurlahetystot">
            <Suurlahetystot />
          </Route>

          <Route path="/kauneimmatkirkot">
            <Kauneimmatkirkot />
          </Route>
          <Route path="/muutkohteet">
            <Muutkohteet />
          </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
