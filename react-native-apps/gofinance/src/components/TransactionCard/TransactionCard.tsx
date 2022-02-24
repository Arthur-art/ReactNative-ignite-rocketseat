import React from "react";
import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
 } from "./styles";

export const TransactionCard = () =>{
    
    return (
        <Container>
            <Title>Desenvolvimento de site</Title>
            
            <Amount>{10000}</Amount>

            <Footer>
                <Category>
                    <Icon name='dollar-sign' />
                    <CategoryName>Vendas</CategoryName>
                </Category>
                <Date>24/02/2022</Date>
            </Footer>
        </Container>
    )
}