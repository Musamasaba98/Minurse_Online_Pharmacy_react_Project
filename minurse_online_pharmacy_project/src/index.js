import CssBaseline from '@mui/material/CssBaseline';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import Root from './Root';
import Cart from './Routes/Cart';
import Catalog, { loader as catalogLoader } from './Routes/Catalog';
import Category, { loader as categoryProductsLoader } from './Routes/Category';
import Index, { loader as productsLoader } from './Routes/Index';
import Product, { loader as productLoader } from './Routes/Product';
import Products, { loader as allProductsLoader } from './Routes/Products';
import { store } from './Store';


let persistor = persistStore(store)



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{
      index: true, element: <Index />, loader: productsLoader,
    },
    {
      path: "/all-products",
      element: <Products />,
      loader: allProductsLoader
    },
    {
      path: "/catalog",
      element: <Catalog />,
      loader: catalogLoader
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/:category",
      element: <Category />,
      loader: categoryProductsLoader
    },
    {
      path: "/products/:productId",
      element: <Product />,
      loader: productLoader
    },

    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
