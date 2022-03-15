
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';
import SigninPage from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/signin' exact element={<SigninPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
