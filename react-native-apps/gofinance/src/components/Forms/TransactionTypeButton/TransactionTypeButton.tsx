import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles'

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

type Props = TouchableOpacityProps &{
    title: string;
    type: 'up' | 'down';
}

export const TransactionTypeButton = ({type, title, ...rest}:Props) => {
    return (
        <Container {...rest}>
            <Icon name={icons[type]}/>
            <Title>
                {title}
            </Title>
        </Container>
    )
}