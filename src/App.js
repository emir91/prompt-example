import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import Important from "./Important"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/important' component={Important} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
