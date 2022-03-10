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

 type Data ={
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;
    date: string;
    }

 type Props ={
    data: Data
 }

export const TransactionCard = ({data}:Props) =>{
    
    const {amount,category,date,title,type } = data;

    return (
        <Container>
            <Title>{title}</Title>
            
            <Amount type={type}>{amount}</Amount>

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