// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { ChakraProvider } from "@chakra-ui/react";
// import { BrowserRouter } from "react-router-dom";
// import ChatProvider from './Context/ChatProvider';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <ChatProvider>
//       <ChakraProvider>
//         <App />
//       </ChakraProvider>
//     </ChatProvider>
//   </BrowserRouter>
// );

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import ChatProvider from "./Context/ChatProvider";

ReactDOM.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

