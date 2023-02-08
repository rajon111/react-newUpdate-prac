import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { About } from './components/About/About';
import Home  from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layout/main'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          loader:()=>fetch('t-shirt.json'),
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/Orders",
          element: <Orders></Orders>,
        }
      ]
    }
  ]);

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
