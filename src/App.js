import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { About } from './components/About/About';
import Home  from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Friends from './components/Friends/Friends';
import Main from './layout/main'
import FriendDetails from './components/Friends/FriendDetails/FriendDetails';
import Hello from './components/Hello/Hello';

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
          path: "friends",
          loader:()=>{
            return fetch(`https://jsonplaceholder.typicode.com/users`)},
          element: <Friends></Friends>,
        },
        {
          path: "friend/:friendId",
          loader:async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)},
          element: <FriendDetails></FriendDetails>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/hello",
          element: <Hello></Hello>,
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
