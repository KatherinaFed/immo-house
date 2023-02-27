import {
  Box,
  Button,
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
import RoomsSelect from './Inputs/RoomsSelect';
import SearchInput from './Inputs/SearchInput';

interface Values {
  search: string;
  minPrice: string;
  maxPrice: string;
  rooms: string;
}

const SearchCard: React.FC = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      search: '',
      minPrice: '',
      maxPrice: '',
      rooms: '',
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
          <SearchInput values={values.search} handleChange={handleChange} />

          <PriceInput values={values} handleChange={handleChange} />

          <RoomsSelect handleChange={handleChange} />

          <Button type="submit">Send</Button>
        </form>
      </Center>
    </div>
  );
};

export default SearchCard;
