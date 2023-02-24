import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import FlatCard from '../Card/FlatCard';

const Main: React.FC = () => {
  return (
    <Grid padding={'5px'} templateColumns="repeat(5, 1fr)" gap={1}>
      <GridItem>
        <FlatCard />
      </GridItem>
      <GridItem>
        <FlatCard />
      </GridItem>
      <GridItem>
        <FlatCard />
      </GridItem>
    </Grid>
  );
};

export default Main;
