import {
  InputRightElement,
  Container,
  Text,
  InputGroup,
  Input,
  IconButton,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
export default function Search({ handleSubmit, setQuery }) {
  return (
    <Container>
      <Text
        color="blue.800"
        fontWeight="semibold"
        mb="1rem"
        textAlign="center"
        textDecoration="underline"
        fontSize={["4xl", "4xl", "5xl", "5xl"]}
      >
        Search
      </Text>
      <form onSubmit={handleSubmit}>
        <InputGroup pb="1rem">
          <Input
            placeholder="Search for World"
            variant="ghost"
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputRightElement
            children={
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                bg="blue.400"
                color="white"
                onClick={handleSubmit}
              />
            }
          />
        </InputGroup>
      </form>
    </Container>
  );
}
