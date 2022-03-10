import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

interface Props {
    type: 'positive' | 'negative';
}

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 24px;
`;

export const Title = styled.Text`
 font-family: ${({theme})=> theme.fonts.regular}
 font-size: ${RFValue(14)}px;
`;

export const Amount = styled.Text<Props>`
   font-family: ${({theme})=> theme.fonts.regular}
   font-size: ${RFValue(20)}px;
   margin-top: 2px;
   ${(props) => props.type === 'positive' ? ` color: ${props.theme.colors.success}` : `color: ${props.theme.colors.attention}`}
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
`;

export const Category = styled.Text`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`;

export const CategoryName = styled.Text`
     font-size: ${RFValue(20)}px;
     color: ${({theme}) => theme.colors.text};
`;

export const Date = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.text};
`;