import { action as updateOrderAction } from './features/order/UpdateOrder';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Order, { loader as orderLoader } from './features/order/Order';
import Menu, { loader as menuLoader } from './features/menu/Menu';

import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Home from './ui/Home';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
