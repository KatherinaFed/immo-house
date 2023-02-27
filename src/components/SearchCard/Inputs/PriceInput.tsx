import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';
import React from 'react';

interface ValuesPrice {
  minPrice: string;
  maxPrice: string;
}

interface Props {
  values: ValuesPrice;
  handleChange: (e: React.ChangeEvent<any>) => void;
}

const PriceInput: React.FC<Props> = ({ values, handleChange }) => {
  return (
    <Flex>
      <Box padding={1} paddingRight={1}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.400"
            fontSize="1.2em"
            children="€"
          />
          <Input
            id="minPrice"
            name="minPrice"
            type="minPrice"
            placeholder="0"
            onChange={handleChange}
            value={values.minPrice}
            required={true}
          />
        </InputGroup>
      </Box>
      <Box padding={1} paddingRight={1}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.400"
            fontSize="1.2em"
            children="€"
          />
          <Input
            id="maxPrice"
            name="maxPrice"
            type="number"
            placeholder="5000+"
            onChange={handleChange}
            value={values.maxPrice}
            required={true}
          />
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default PriceInput;
