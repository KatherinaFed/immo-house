import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import FlatCard from './components/Card/Card';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <FlatCard />
    </ChakraProvider>
  );
};

export default App;
