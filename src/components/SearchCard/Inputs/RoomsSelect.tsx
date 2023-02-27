import { Box, Select } from '@chakra-ui/react';
import React from 'react';

interface Props {
  handleChange: (e: React.ChangeEvent<any>) => void;
}

const RoomsSelect: React.FC<Props> = ({ handleChange }) => {
  return (
    <Box padding={1}>
      <Select
        name="rooms"
        id="rooms"
        placeholder="Rooms option"
        onChange={handleChange}
      >
        <option value={'1'}>1 room</option>
        <option value={'2'}>2 rooms</option>
        <option value={'3'}>3 rooms</option>
        <option value={'4'}>4 rooms</option>
        <option value={'5'}>5 rooms</option>
      </Select>
    </Box>
  );
};

export default RoomsSelect;
