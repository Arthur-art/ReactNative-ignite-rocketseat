import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../components/Forms/Button/Button';
import { categories } from '../../utils/categories';
import {Category, Container, Footer, Header, Icon, Name, Separator, Title } from './styles';

interface Category{
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export const CategorySelect = ({
    category,
    setCategory,
    closeSelectCategory,
}:Props) => {

    function handleCategorySelect(item: Category){
        setCategory(item)
    }

    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
                data={categories}
                style={{flex:1, width: '100%'}}
                keyExtractor={(item) => item.key}
                renderItem={({item})=>(
                    <Category
                     isActive={category.key === item.key}
                     onPress={() => handleCategorySelect(item)}>
                        <Icon name={item.icon}/>
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator/>}
            />
            <Footer>
                <Button onPress={closeSelectCategory} title='Selecionar' />
            </Footer>
        </Container>
    );
};