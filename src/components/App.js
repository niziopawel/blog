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
        <Posts />
      </Wrapper>
    </div>
  )
}

export default App
