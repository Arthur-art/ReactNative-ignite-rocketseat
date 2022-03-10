import React from 'react'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { HighLightCard } from '../../components/HighlightCard/HighlightCard'
import { TransactionCard } from '../../components/TransactionCard/TransactionCard'
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreating,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles'

export const Dashboard = () => {

    const data = [{
        type: 'positive',
        amount:'R$17000,00',
        category: {
            name: 'Trabalho',
            icon: 'dollar-sign'
        },
        date:"10/03/2022",
        title:"Desenvolvimento de site"
    },
    {
        type: 'negative',
        amount:'- R$130,00',
        category: {
            name: 'Alimentação',
            icon: 'dollar-sign'
        },
        date:"10/03/2022",
        title:"Almoço"
    },
    {
        type: 'negative',
        amount:'- R$1200,00',
        category: {
            name: 'Moradia',
            icon: 'dollar-sign'
        },
        date:"10/03/2022",
        title:"Aluguel"
    }]

    return (
        <Container>
            <Header>
               <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri:'https://avatars.githubusercontent.com/u/54858003?v=4'}}/>
                        <User>
                            <UserGreating>Olá</UserGreating>
                                <UserName>Arthur</UserName>
                        </User>
                    </UserInfo>
                    <Icon name='power'  />
               </UserWrapper>
            </Header>
            <HighlightCards>
                <HighLightCard title='Entrada' amount={17000} lastTransaction='Última entrada dia 13 de abril' type='up'  />
                <HighLightCard title='Saida' amount={1000} lastTransaction='Última saida dia 13 de abril' type='down' />
                <HighLightCard title='Total' amount={16000} lastTransaction='Última total dia 13 de abril' type='total' />
            </HighlightCards>
            <Transactions>
                <Title>Listagem</Title>
                <TransactionsList
                    data={data}
                    renderItem={({item}) => <TransactionCard type={item.type} data={item} />}
                    contentContainerStyle={{paddingBottom: getBottomSpace()}}
                />
            </Transactions>
        </Container>
    )
}   