import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header'
import PostsList from './features/posts/posts-list'
import PostDetails from './features/posts/post-details'
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
            <PostsList />
          </Route>
          <Route exact path="/post/:postId">
            <PostDetails />
          </Route>
        </Switch>
      </Wrapper>
    </div>
  )
}

export default App
