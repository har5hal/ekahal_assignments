// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import NoPage from './components/NoPage';
import { UserContextProvider } from './context/UserContext';

// const queryClient = new QueryClient();

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          {/* <QueryClientProvider client={queryClient}> */}
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="signup" element={<Signup />} />
              <Route exact path="dashboard" element={<Dashboard />} />
              <Route exact path="*" element={<NoPage />} />
            </Routes>
          {/* </QueryClientProvider> */}
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
