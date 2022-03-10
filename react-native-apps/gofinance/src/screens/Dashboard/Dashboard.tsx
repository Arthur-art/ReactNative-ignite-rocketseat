import React from 'react'
import { HighLightCard } from '../../components/HighlightCard/HighlightCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard/TransactionCard'
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

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export const Dashboard = () => {

    const data: DataListProps[] = [{
        type: 'positive',
        id: '1',
        title:"Desenvolvimento de site",
        amount:'R$17000,00',
        category: {
            name: ' Trabalho',
            icon: 'briefcase'
        },
        date:"10/03/2022",
    },
]

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
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard  data={item} />}
                />
            </Transactions>
        </Container>
    )
}   