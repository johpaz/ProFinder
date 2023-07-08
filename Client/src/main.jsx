import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./services/redux/store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { customColors } from './utils/customChakraColors.js'

const theme = extendTheme(customColors)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
