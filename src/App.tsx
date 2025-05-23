import {  Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorModeValue } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";

function App() {
  const navBg = useColorModeValue("blue.50", "blue.900");
  const asideBg = useColorModeValue("yellow.50", "yellow.900");
  const mainBg = useColorModeValue("blue.100", "blue.800");
  return (
    
    <Grid
    
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap={4}
      p={4}
      bg={navBg}
  
    >
      <GridItem area="nav" bg="coral" p={4} >
        <NavBar/> 
      </GridItem>
     
      <GridItem
        area="aside"
        bg="gold"
        p={4}
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>
     

      <GridItem area="main"  p={4}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
