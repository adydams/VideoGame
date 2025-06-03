import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image?: string;
  parent_platforms:{platform: Platform}[],
  metacritic: number
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("")
      .then((res) => {
        console.log(res.data.results);
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}

      
        <SimpleGrid columns={ {sm:1, md:2, lg:3, xl:4, }} padding="10px" gap="40px">
        
            {games.map((game) => (              
                <GameCard game={game} />             
            ))}
         
        </SimpleGrid>
    
    </>
  );
};

export default GameGrid;
