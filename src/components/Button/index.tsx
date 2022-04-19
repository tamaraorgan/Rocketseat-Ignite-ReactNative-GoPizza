import React from 'react'
import { View } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Load, Title, TypeProps } from './styles'

type Props = RectButtonProps & {
  title: string
  type?: TypeProps
  isLoading?: boolean
}

export function Button({
  title,
  type = 'primary',
  isLoading = false,
  ...rest
}: Props) {
  return (
    <Container type={type} enabled={!isLoading} {...rest}>
      <View>{isLoading ? <Load /> : <Title>{title}</Title>}</View>
    </Container>
  )
}
