
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';
import { AuthContextProvider } from './contexts/AuthContext';

function App()
{
  return (
    <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<h1>Page Not Found</h1>}></Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
  );
}

export default App;
