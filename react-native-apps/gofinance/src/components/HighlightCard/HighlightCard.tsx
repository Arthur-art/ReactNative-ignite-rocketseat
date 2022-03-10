import React from 'react';
import { 
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction
 } from './styles';

 type Props = {
    title: string;
    amount: number;
    lastTransaction: string;
    type: 'up' | 'down' | 'total';
 }

 const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'activity'
 }

export const HighLightCard = ({title, amount, lastTransaction, type}:Props) => {

    return (
        <Container>
            <Header>
                <Title>{title}</Title> 
               <Icon name={icon[type]} type={type}/>
            </Header>
            <Footer>
                <Amount type={type}>R${amount}</Amount>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}