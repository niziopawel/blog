import { Route, Switch, Redirect } from 'react-router-dom'

import Header from './header'
import Posts from './posts'
import './App.css'

function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <div className="content">{children}</div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/blog" />
          </Route>
          <Route exact path="/blog">
            <Posts />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  )
}

export default App
