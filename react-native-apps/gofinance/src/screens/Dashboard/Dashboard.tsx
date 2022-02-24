import React from 'react'
import { HighLightCard } from '../../components/HighlightCard/HighlightCard'
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
} from './styles'

export const Dashboard = () => {


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
                <HighLightCard />
                <HighLightCard />
                <HighLightCard />
            </HighlightCards>
        </Container>
    )
}   