import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header'
import Posts from './pages/posts'
import SinglePost from './pages/single-post'
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
          <Route exact path="/post/:postId">
            <SinglePost />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  )
}

export default App
