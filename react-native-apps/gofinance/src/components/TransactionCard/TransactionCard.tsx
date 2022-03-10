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

 type Props ={
    data:{
    title: string;
    amount: string;
    category: Category;
    date: string;
    }
 }

export const TransactionCard = ({data}:Props) =>{
    
    const {amount,category,date,title } = data;

    return (
        <Container>
            <Title>{title}</Title>
            
            <Amount>{amount}</Amount>

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