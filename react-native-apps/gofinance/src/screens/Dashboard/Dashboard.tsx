import React from "react"
import { Text, View } from "react-native"
import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreating,
  UserName,
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
               </UserWrapper>
            </Header>
        </Container>
    )
}   