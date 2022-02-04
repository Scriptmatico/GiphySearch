import { Wrap } from "@chakra-ui/react";
import GifItem from "./gifItem";
export default function GifsList({ gifs }) {
  return (
    <Wrap px="1rem" spacing={4}>
      {gifs.map((gif) => {
        return (
          <GifItem key={gif.id} title={gif.title} image={gif.image_small} />
        );
      })}
    </Wrap>
  );
}
