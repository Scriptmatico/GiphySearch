import { Image, WrapItem } from "@chakra-ui/react";

export default function GifItem({ title, image }) {
  return (
    <WrapItem
      boxShadow="base"
      rounded="20px"
      overflow="hidden"
      bg="white"
      lineHeight="0"
    >
      <Image alt={title} src={image} />
    </WrapItem>
  );
}
