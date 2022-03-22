import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Button } from '../../components/Forms/Button/Button'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton/CategorySelectButton'
import { Input } from '../../components/Forms/Input/Input'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton/TransactionTypeButton'
import { CategorySelect } from '../CategorySelect/CategorySelect'
import { Container, Fields, Form, Header, Title, TransactionsType } from './styles'

export const Register = () =>{

    const [transactionsType, setTransactionsType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key:'category',
        name:'Categoria',
    })

    const handleTransactionTypeSelect = (type: 'up' | 'down') =>{
        setTransactionsType(type);
    }

    const handleOpenSelectCategoryModal = () => {
        setCategoryModalOpen(true)
    }

    const handleCloseSelectCategoryModal = () => {
        setCategoryModalOpen(false)
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

                    <CategorySelectButton onPress={handleOpenSelectCategoryModal} title={category.name} />
                </Fields>
                <Button title='Enviar'/>
            </Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect 
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
            
        </Container>
    )
}