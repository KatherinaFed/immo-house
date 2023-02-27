import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Flex, Image, Spacer } from '@chakra-ui/react';

type Props = {
  imageUrl: string;
  imageAlt: string;
  rooms: string;
  title: string;
  formattedPrice: string;
};

const FlatCard: React.FC<Props> = ({
  imageUrl,
  imageAlt,
  rooms,
  title,
  formattedPrice,
}) => {
  // const property = {
  //   imageUrl: 'https://bit.ly/2Z4KKcF',
  //   imageAlt: 'Rear view of modern home with pool',
  //   rooms: 3,
  //   title: 'Modern home in city center in the heart of historic Los Angeles',
  //   formattedPrice: '€1,600',
  // };

  return (
    <Box maxW="300px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={imageUrl} alt={imageAlt} />

      <Box p="3">
        <Box
          mb={2}
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={2}
        >
          {title}
        </Box>

        <Flex alignItems="baseline">
          <Box
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {rooms} rooms
          </Box>
          <Spacer />
          <Box>
            {formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / month
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FlatCard;
