import React from 'react'
import { SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input } from '@chakra-ui/react';
import { useFormik } from 'formik';

interface Values {
  search: string;
}

const SearchInput: React.FC = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values: Values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
        <Input
          id="search"
          name="search"
          placeholder="Search"
          value={values.search}
          onChange={handleChange}
        />
        <IconButton type='submit' aria-label="Search database" icon={<SearchIcon />} />
      </form>
  )
}

export default SearchInput