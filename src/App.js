import Index from "./components/index"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Routing from "./components/Routing";


function App() {
  return (
    <Router>
    <Switch>
<Route exact path="/"><Index/></Route>
<Route exact path="/routingExample"><Routing/></Route>
</Switch>
</Router>
    
  )
}

export default App;
