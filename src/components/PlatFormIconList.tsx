import React from 'react'
import { Platform } from './GameGrid'
import { Icon, HStack } from "@chakra-ui/react";
import {
   FaWindows,
   FaPlaystation, 
   FaBox, 
   FaApple, 
   FaLinux
   } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons/lib';

interface Props {
    platforms: Platform[]
}
const PlatFormIconList = ({platforms}: Props) => {
    const iconMap:{[key: string]: IconType} ={
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaBox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
  return (
    <HStack>
    {platforms.map((platform) => {
      const IconComponent = iconMap[platform.slug];
      if (!IconComponent) return null;

      return (
        <Icon
          as={IconComponent}
          key={platform.id || platform.slug}
          boxSize={5}
          color="gray.700"
        />
      );
    })}
  </HStack>
  )
}

export default PlatFormIconList