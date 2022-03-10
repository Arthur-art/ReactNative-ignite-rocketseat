import React from 'react'
import { Container, Icon, Title } from './styles'

type Props = {
    title: string;
    type: 'up' | 'down';
}

export const TransactionTypeButton = ({title}:Props) => {
    return (
        <Container>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}