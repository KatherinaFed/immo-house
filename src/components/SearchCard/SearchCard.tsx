import {
  Box,
  Center,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import PriceInput from './Inputs/PriceInput';
import SearchInput from './Inputs/SearchInput';

interface Values {
  search: string;
  minPrice: string;
  maxPrice: string;
}

const SearchCard: React.FC = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      search: '',
      minPrice: '',
      maxPrice: '',
    },
    onSubmit: (values: Values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Center>
        <form onSubmit={handleSubmit}>
          <Box padding={1}>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              name="search"
              type="text"
              onChange={handleChange}
              value={values.search}
            />
          </Box>
          <Box></Box>
          <Flex>
            <Box padding={1} paddingRight={1}>
              <label htmlFor="minPrice">Min</label>
              <input
                id="minPrice"
                name="minPrice"
                type="number"
                placeholder="0"
                onChange={handleChange}
                value={values.minPrice}
              />
            </Box>
            <Box padding={1}>
              <label htmlFor="maxPrice">Max</label>
              <input
                id="maxPrice"
                name="maxPrice"
                type="number"
                placeholder="5000+"
                onChange={handleChange}
                value={values.maxPrice}
              />
            </Box>
          </Flex>
          <button type="submit">Send</button>
        </form>
      </Center>
    </div>
  );
};

export default SearchCard;
