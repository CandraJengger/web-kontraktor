import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

import './styles/index.scss';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const theme = extendTheme({
  colors: {
    custom: {
      100: '#E01028',
      200: '#E01028',
      300: '#E01028',
      400: '#E01028',
      500: '#E01028',
      600: '#E01028',
      700: '#E01028',
      800: '#E01028',
      900: '#E01028',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
