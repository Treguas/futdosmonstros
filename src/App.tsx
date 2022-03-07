
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';
import { List } from './pages/List';
import { AuthContextProvider } from './contexts/AuthContext';

function App()
{
  return (
    <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/list" element={<List />}></Route>            
            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
  );
}

export default App;
