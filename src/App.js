import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/home",
      element: <div>HOME PAGE!</div>,
    },
  ]);

  return (
    <div >
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
