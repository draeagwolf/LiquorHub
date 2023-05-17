import { Text } from "@chakra-ui/react";
import useLiquors from "../hooks/useLiquors";

const LiquorGrid = () => {
  const { liquors, error } = useLiquors();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {liquors.map((liquor) => (
          <li id={liquor.id.toString()} key={liquor.id}>
            {liquor.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LiquorGrid;
