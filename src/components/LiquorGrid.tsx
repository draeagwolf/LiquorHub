import { SimpleGrid, Text } from "@chakra-ui/react";
import useLiquors from "../hooks/useLiquors";
import LiquorCard from "./LiquorCard";

const LiquorGrid = () => {
  const { liquors, error } = useLiquors();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} spacing={10}>
        {liquors.map((liquor) => (
          <LiquorCard key={liquor.id} liquor={liquor} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default LiquorGrid;
