import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Page1 from './Pages/Page1.jsx';
import Page2 from './Pages/Page2.jsx';
import Page3 from './Pages/Page3.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Page1 />
      },
      {
        path: '/Page2',
        element: <Page2 />
      },
      {
        path: '/Page3',
        element: <Page3 />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

