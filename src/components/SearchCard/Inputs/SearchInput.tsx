import React from 'react';
import { Box, Input } from '@chakra-ui/react';

interface Props {
  values: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
}

const SearchInput: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <Box padding={1}>
      <Input
        id="search"
        name="search"
        placeholder="Search"
        value={values}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchInput;
