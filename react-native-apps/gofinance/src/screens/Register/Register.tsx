import React from 'react'
import { Text } from 'react-native'
import { Input } from '../../components/Forms/Input/Input'
import { Container, Form, Header, Title } from './styles'

export const Register = () =>{

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Input placeholder='Nome'/>
                <Input placeholder='Preço'/>
            </Form>
            
        </Container>
    )
}