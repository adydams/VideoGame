// components/NavBar.jsx
import { HStack, Image, Text, VStack, Spacer } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.jpg";
import Themes from "./Themes";
import { useColorModeValue } from "@/components/ui/color-mode";

const NavBar = () => {
  // Use color mode for text colors using the provided hook
  const textColor = useColorModeValue("gray.800", "gray.100");
  const subtitleColor = useColorModeValue("gray.600", "gray.300");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <HStack width="100%"  align="center">
      <HStack >
        <Image
          rounded="md"
          src={logo}
          boxSize="60px"
          alt="logo"
          border="1px solid"
          borderColor={borderColor}
        />
        <VStack align="start">
          <Text fontWeight="bold" color={textColor}>
            Gospel Movies
          </Text>
          <Text textStyle="sm" color={subtitleColor}>
            Scriptures via the gospel lens
          </Text>
        </VStack>
      </HStack>
      <Spacer />
      <Themes />
    </HStack>
  );
};

export default NavBar;
