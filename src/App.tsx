import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import FlatCard from './components/FlatCard/FlatCard';
import SearchCard from './components/SearchCard/SearchCard';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Grid
        templateAreas={`"header"
        "form"
        "main"
        "footer"`}
        gridTemplateRows={'50px 1fr 1fr 30px'}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" bg="orange.300" area={'header'}>
          Header
        </GridItem>
        <GridItem pl="2" area={'form'}>
          <SearchCard />
        </GridItem>
        <GridItem pl="2" bg="green.300" area={'main'}>
          <Main />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={'footer'}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
