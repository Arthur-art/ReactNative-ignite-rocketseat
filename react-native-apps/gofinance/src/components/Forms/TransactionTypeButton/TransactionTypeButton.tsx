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
    isActive: boolean;
}

export const TransactionTypeButton = ({isActive,type, title, ...rest}:Props) => {
    return (
        <Container 
        isActive={isActive}
        type={type}
        {...rest}>
            <Icon 
            isActive={isActive}
            type={type}
            name={icons[type]}/>
            <Title>
                {title}
            </Title>
        </Container>
    )
}