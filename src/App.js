import { useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Alert from "./Alert"
import Home from "./Home"
import Important from "./Important"

const App = () => {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmMessage, setConfirmMessage] = useState()
  const [confirmCallback, setConfirmCallback] = useState()

  return (
    <div>
      <BrowserRouter
        getUserConfirmation={(message, callback) => {
          setConfirmMessage(message)
          setConfirmCallback(() => callback)
          setConfirmOpen(true)
        }}
      >
        <Alert
          open={confirmOpen}
          title='Leave Page'
          message={confirmMessage}
          onOk={() => {
            confirmCallback(true)
            setConfirmOpen(false)
          }}
          onCancel={() => {
            confirmCallback(false)
            setConfirmOpen(false)
          }}
        />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/important' component={Important} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
