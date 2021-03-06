import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons';

interface IProps {
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
`;
export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;
export const Icon = styled(Feather)<IProps>`
    font-size: ${RFValue(40)}px;
    color: ${({theme}) => theme.colors.success};
    ${(props) => props.type === 'down' && ` color: ${props.theme.colors.attention}`}
`;
export const Footer = styled.View`

`;
export const Amount = styled.Text<IProps>`
    margin-top: 38px;
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${({theme})=> theme.colors.text_dark};
    ${(props) => props.type === 'down' ? ` color: ${props.theme.colors.attention}` : `color: ${props.theme.colors.success}`}
`;
export const LastTransaction = styled.Text`
    font-family: ${({theme})=> theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({theme})=> theme.colors.text}
`;