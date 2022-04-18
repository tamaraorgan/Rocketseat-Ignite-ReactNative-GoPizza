import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, Title, Load, TypeProps } from './styles'

interface ButtonProps extends RectButtonProps {
    title: string
    type?: TypeProps
    isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
    title,
    type = 'primary',
    isLoading = false,
    ...rest
}) => {
    return (
        <Container type={type} {...rest}>
            {isLoading ? <Load /> : <Title>{title}</Title>}
        </Container>
    )
}
