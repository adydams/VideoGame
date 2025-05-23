import React from "react";

import { Game } from "../components/GameGrid";
import { Heading, Card, Avatar, VStack } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width="400px" height="450px" overflow="hidden">
      <Card.Body gap="2">
        <Avatar.Root size="full" shape="rounded">
          <Avatar.Image src={game.background_image} alt={game.name} />
          <Avatar.Fallback name={game.name} />
        </Avatar.Root>
        {/* <Card.Title mt="2">
          <Heading textStyle="3xl">{game.name}</Heading>
        </Card.Title> */}
      </Card.Body>
      <Card.Footer>
        {/* <Button variant="outline">View</Button>
        <Button>Join</Button> */}
        <VStack gap="5" align="left">
          <Card.Description>
            <Heading textStyle="3xl">
              {game.name}
            </Heading>
          </Card.Description>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          {/* <Heading textStyle="sm">{game.name}</Heading> */}
        </VStack>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
