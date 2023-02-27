import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { dummyDataProperty } from '../FlatCard/dummyData';
import FlatCard from '../FlatCard/FlatCard';

const Main: React.FC = () => {
  return (
    <Grid padding={'5px'} templateColumns='repeat(5, 1fr)' gap={3}>
      {dummyDataProperty.map((flat, index) => (
        <GridItem pl={1} key={index}>
          <FlatCard {...flat} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Main;
