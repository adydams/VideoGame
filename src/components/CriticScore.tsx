import { Badge } from '@chakra-ui/react'
import React from 'react'
interface Props{
    score: number
}

const CriticScore = ({score} : Props) => {
  const color = score > 75 ? 'green' : score >60 ? 'yellow' : ''
  return (
    <Badge color={color} fontSize='14px' paddingX="2" borderRadius='2px'>
        {score}
    </Badge>
  )
}

export default CriticScore