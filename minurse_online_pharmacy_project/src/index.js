import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as productsLoader } from './Root';
import Category, { loader as categoryProductsLoader } from './Routes/Category';
import Product, { loader as productLoader } from './Routes/Product';
import Products, { loader as allProductsLoader } from './Routes/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: productsLoader,
  },
  {
    path: "/all-products",
    element: <Products />,
    loader: allProductsLoader
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
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
