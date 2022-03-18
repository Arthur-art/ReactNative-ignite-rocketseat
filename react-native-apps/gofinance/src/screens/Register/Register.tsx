import React, { useState } from 'react'
import { Button } from '../../components/Forms/Button/Button'
import { CategorySelect } from '../../components/Forms/CategorySelect/CategorySelect'
import { Input } from '../../components/Forms/Input/Input'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton/TransactionTypeButton'
import { Container, Fields, Form, Header, Title, TransactionsType } from './styles'

export const Register = () =>{

    const [transactionsType, setTransactionsType] = useState('');

    const handleTransactionTypeSelect = (type: 'up' | 'down') =>{
        setTransactionsType(type);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder='Nome'/>
                    <Input placeholder='Preço'/>
                    <TransactionsType>
                        <TransactionTypeButton
                         onPress={() => handleTransactionTypeSelect('up')}
                         isActive={transactionsType === 'up'}
                         title='Income' type='up'/>
                        <TransactionTypeButton
                         onPress={() => handleTransactionTypeSelect('down')}
                         isActive={transactionsType === 'down'}
                         title='Outcome' type='down'/>
                    </TransactionsType>

                    <CategorySelect title='Categoria' />
                </Fields>
                <Button title='Enviar'/>
            </Form>
            
        </Container>
    )
}