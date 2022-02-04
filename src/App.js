import "./App.css";
import { useState, useEffect } from "react";
import getGifs from "./services/getGifs";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import GifList from "./components/gifsList";
import Search from "./components/search";
function App() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");
  const [performQuery, setPerformQuery] = useState(false);
  useEffect(() => {
    getGifs().then((data) => setGifs(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query !== "") {
      setPerformQuery(true);
      getGifs(query).then((data) => setGifs(data));
    } else {
      setPerformQuery(false);
    }
  };
  return (
    <ChakraProvider>
      <Box overflow="hidden" bg="blue.100" minH="100vh">
        <Search handleSubmit={handleSubmit} setQuery={setQuery} />
        {performQuery && (
          <Text
            color="blue.800"
            fontWeight="semibold"
            mb="1rem"
            textAlign="center"
            textDecoration="underline"
            fontSize={["4xl", "4xl", "5xl", "5xl"]}
          >
            Results for: {query}
          </Text>
        )}
        <GifList gifs={gifs} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
