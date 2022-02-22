import React from "react"
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
} from "./styles"

export const Dashboard = ()=>{


    return (
        <Container>
            <Header>
               <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri:"https://avatars.githubusercontent.com/u/54858003?v=4"}}/>
                        <User>
                            <UserGreating>Olá</UserGreating>
                                <UserName>Arthur</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="poweroff" size={24}  />
               </UserWrapper>
            </Header>
        </Container>
    )
}   