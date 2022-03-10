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

 type Category = {
     name: string;
     icon: string;
 }

 export interface TransactionCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;
    date: string;
    }

 export type Props ={
    data: TransactionCardProps
 }

export const TransactionCard = ({data}:Props) =>{
    
    const {amount,category,date,title,type } = data;

    return (
        <Container>
            <Title>{title}</Title>
            
            <Amount type={type}>
                {type === 'negative' ? '- ' : ''}
                {amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>{category.name}</CategoryName>
                </Category>
                <Date>{date}</Date>
            </Footer>
        </Container>
    )
}