import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Homepage/>
  },
  {
    path: '/chat',
    element:<ChatPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <ChakraProvider>
            <RouterProvider router={router}></RouterProvider>
      </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
