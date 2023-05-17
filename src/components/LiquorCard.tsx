import { FetchLiquorsResponse } from "../hooks/useLiquors";
import { Card, CardBody, Heading, Text, Image } from "@chakra-ui/react";

interface Props {
  liquor: FetchLiquorsResponse;
}
const LiquorCard = ({ liquor }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <CardBody>
        <Image src={"../public/Aperol.webp"} />
        <Heading fontSize="2xl">{liquor.name}</Heading>
        <Text fontSize="sm"> ${liquor.price}</Text>
        <Text fontSize="sm"> Quantity: {liquor.quantity}</Text>
        <Text fontSize="sm"> {liquor.type}</Text>
      </CardBody>
    </Card>
  );
};

export default LiquorCard;
