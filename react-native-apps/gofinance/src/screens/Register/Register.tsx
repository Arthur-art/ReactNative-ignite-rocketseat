import React from 'react'
import { Text } from 'react-native'
import { Button } from '../../components/Forms/Button/Button'
import { Input } from '../../components/Forms/Input/Input'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton/TransactionTypeButton'
import { Container, Fields, Form, Header, Title } from './styles'

export const Register = () =>{

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder='Nome'/>
                    <Input placeholder='Preço'/>
                    <TransactionTypeButton title='' type='up'/>
                </Fields>
                <Button title='Enviar'/>
            </Form>
            
        </Container>
    )
}