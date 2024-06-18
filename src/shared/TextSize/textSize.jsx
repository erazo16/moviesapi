import React from 'react'
import { Text } from './style';

export const TextSize = ({ text, maxLength }) => {

    const fontSizeBase = 16;
    const minSize = 14;
    const fontSize = text.length > maxLength ? `${minSize}px` : `${fontSizeBase}px`

  return (
    <Text fontSize={fontSize}>
        {text}
    </Text>
  )
}
